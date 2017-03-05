import init from '../inquiries/init'
import Installer from '../services/installer'

export default async cmd => {
  const view = await init(cmd)
  const svc = new Installer(view)
  svc.on('start', file => cmd.log(`Installing ${file.name}...`))
  svc.on('finish', file => cmd.log(`${file.name} installed.`))

  await svc.run()
}
