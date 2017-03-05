import Vorpal from 'vorpal'
import asDefault from 'vorpal-as-default'
import init from './commands/init'
import secret from './commands/secret'

const vorpal = Vorpal()
vorpal.find('exit').hidden()

vorpal
  .command('init', 'Sets up your project to use Helm with Drone')
  .action(() => {
    vorpal.ui.delimiter('> ')
    init(vorpal.activeCommand)
  })

vorpal
  .command('secret <name> <value>', 'Add a secret to your config')
  .option('-i, --image <image>', 'Specify an image in which to inject this secret', ['node', 'ruby'])
  .option('-c, --container-name <container name>', 'Specify a container to add the secrets to. By default uses the first container in the list.')
  .action((args) => {
    secret(vorpal.activeCommand, args)
  })

vorpal
  .delimiter(' ')
  .parse(process.argv)
  .use(asDefault, 'help')
  .exec('exit')
