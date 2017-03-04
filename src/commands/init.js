import init from '../inquiries/init'
import Installer from '../services/installer'

export default async cmd => {
  const view = await init(cmd)
  const svc = new Installer(view)
  svc.on('start', name => cmd.log(name))
  svc.on('finish', name => cmd.log(name))
  
  await svc.run()
}
