import { readdirSync } from 'fs-promise'

const confirmOverwrite = { 
  type: 'confirm', 
  name: 'confirm', 
  message: 'Secret exists. Overwrite?',
  default: true
}

const appName = readdirSync('charts')[0]

export const addSecrets = {
  path: `charts/${appName}/templates/secrets.yml`,
  action: async ({ key, cmd, content }) => {
    content.data = content.data || {}
    if (content.data[key] && !(await cmd.prompt(confirmOverwrite)).confirm) return
    content.data[key] = `{{ .Values.secrets.${key} }}`
    return content
  }
}

export const addValues = {
  path: `charts/${appName}/values.yml`,
  action: async ({ key, content }) => {
    content.secrets = content.secrets || {}
    content.secrets[key] = key
    return content
  }
}

export const addDeployment = {
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
