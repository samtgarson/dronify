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

export const removeSecrets = {
  path: `charts/${appName}/templates/secrets.yml`,
  action: async ({ key, cmd, content }) => {
    if (content.data && content.data[key]) delete content.data[key]
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

export const removeValues = {
  path: `charts/${appName}/values.yml`,
  action: async ({ key, content }) => {
    if (content.secrets && content.secrets[key]) delete content.secrets[key]
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

export const removeDeployment = {
  path: `charts/${appName}/templates/deployment.yml`,
  action: async ({ key, content, name, options }) => {
    content.spec.template.spec.containers.forEach((c, i) => {
      if (!(c.env instanceof Array)) return
      const index = c.env.findIndex(e => e.name == name)
      if (index >= 0) content.spec.template.spec.containers[i].env.splice(index, 1)
    })
    return content
  }
}
