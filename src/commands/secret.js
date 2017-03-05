import { dim } from 'chalk'
import { addSecrets, addValues, addDeployment, addDrone } from '../services/secret-strategies'
import { addSecret } from '../services/drone-yml-strategies'
import EditCharts from '../services/edit-charts'

export const add = async (cmd, { name, value, options}) => {
  const strategies = [addSecrets, addValues, addDeployment, addSecret]
  const view = { name, value, cmd, options, key: name.toLowerCase() }
  const svc = new EditCharts({ strategies, view })
  const success = await svc.run()
  if (success) cmd.log(`${dim('>')} Secret added 👌`)
}
