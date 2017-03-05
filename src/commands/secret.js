import { dim } from 'chalk'
import CreateSecret from '../services/create-secret'

const confirmOverwrite = { 
  type: 'confirm', 
  name: 'confirm', 
  message: 'Secret exists. Overwrite?',
  default: true
}

const secrets = {
  path: 'templates/secrets.yml',
  action: async ({ key, cmd, content }) => {
    content.data = content.data || {}
    if (content.data[key] && !(await cmd.prompt(confirmOverwrite)).confirm) return
    content.data[key] = `{{ .Values.secrets.${key} }}`
    return content
  }
}

const values = {
  path: 'values.yml',
  action: async ({ key, content }) => {
    content.secrets = content.secrets || {}
    content.secrets[key] = key
    return content
  }
}

const deployment = {
  path: 'templates/deployment.yml',
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

export default async (cmd, { name, value, options}) => {
  const strategies = [secrets, values, deployment]
  const svc = new CreateSecret({ name, value, cmd, strategies, options })
  const success = await svc.run()
  if (success) cmd.log(`${dim('>')} Secret added 👌`)
}
