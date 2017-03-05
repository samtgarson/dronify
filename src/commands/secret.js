import { dim } from 'chalk'
import { secrets, values, deployment, drone } from '../services/secret-strategies'
import CreateSecret from '../services/create-secret'

export default async (cmd, { name, value, options}) => {
  const strategies = [secrets, values, deployment, drone]
  const view = { name, value, cmd, options, key: name.toLowerCase() }
  const svc = new CreateSecret({ strategies, view })
  const success = await svc.run()
  if (success) cmd.log(`${dim('>')} Secret added 👌`)
}
