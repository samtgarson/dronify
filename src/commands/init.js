import { dim } from 'chalk'
import init from '../inquiries/init'
import Installer from '../services/installer'

export default async (cmd) => {
  const view = await init(cmd)
  const svc = new Installer(view)
  await svc.run()
  cmd.log()
  cmd.log(`${dim('>')} Drone initialized 👌`)
}
