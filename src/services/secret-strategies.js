import { readdirSync } from 'fs-promise'

const confirmOverwrite = { 
  type: 'confirm', 
  name: 'confirm', 
  message: 'Secret exists. Overwrite?',
  default: true
}

const appName = readdirSync('charts')[0]

export const secrets = {
  path: `charts/${appName}/templates/secrets.yml`,
  action: async ({ key, cmd, content }) => {
    content.data = content.data || {}
    if (content.data[key] && !(await cmd.prompt(confirmOverwrite)).confirm) return
    content.data[key] = `{{ .Values.secrets.${key} }}`
    return content
  }
}

export const values = {
  path: `charts/${appName}/values.yml`,
  action: async ({ key, content }) => {
    content.secrets = content.secrets || {}
    content.secrets[key] = key
    return content
  }
}

export const deployment = {
  path: `charts/${appName}/templates/deployment.yml`,
  action: async ({ key, content, name, options }) => {
    const index = options['container-name']
      ? content.spec.template.spec.containers.findIndex(c => c.name == options['container-name'])
      : 0
    content.spec.template.spec.containers[index].env = content.spec.template.spec.containers[index].env || []
    content.spec.template.spec.containers[index].env.push({
      name: name,
      valueFrom: {
        secretKeyRef: {
          name: '{{ template "fullname" . }}',
          key:  key
        }
      }
    })
    return content
  }
}

const keys = ['helm_deploy_staging', 'helm_deploy_production']
const valuesToHash = str => str.split(',').reduce((h, s) => {
  const [k, v] = s.split('=')
  return { ...h, [k]: v }
}, {})

export const drone = {
  path: 'drone.yml',
  action: async ({key, content, name}) => {
    keys.forEach(k => {
      if (!content.pipeline[k]) return
      const values = valuesToHash(content.pipeline[k].values)
      values[`secrets.${key}`] = `\${${name}}`
      content.pipeline[k].values = Object.keys(values)
        .map(k => `${k}=${values[k]}`).sort().join(',')
    })
    return content
  }
}
