import { dim } from 'chalk'
import { addSecrets, addValues, addDeployment, removeSecrets, removeValues, removeDeployment } from '../services/secret-strategies'
import { addSecret, removeSecret } from '../services/drone-yml-strategies'
import EditCharts from '../services/edit-charts'

export const add = async (cmd, { name, value, options}) => {
  const strategies = [addSecrets, addValues, addDeployment, addSecret]
  const view = { name, value, cmd, options, key: name.toLowerCase() }
  const svc = new EditCharts({ strategies, view })
  const success = await svc.run()
  if (success) cmd.log(`${dim('>')} Secret added 👌`)
}

const confirmRemoval = name => ({
  type: 'confirm',
  name: 'confirm',
  message: `Are you sure you want to delete ${name}?`,
  default: false
})

export const remove = async (cmd, { name, value, options}) => {
  if (!(await cmd.prompt(confirmRemoval(name))).confirm) return
  const strategies = [removeSecrets, removeValues, removeDeployment, removeSecret]
  const view = { name, cmd, key: name.toLowerCase() }
  const svc = new EditCharts({ strategies, view })
  const success = await svc.run()
  if (success) cmd.log(`${dim('>')} Secret removed 💀`)
}
