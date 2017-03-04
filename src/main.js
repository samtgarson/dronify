import Vorpal from 'vorpal'
import c from 'chalk'
import asDefault from 'vorpal-as-default'
import init from './commands/init'

const vorpal = Vorpal()
vorpal.find('exit').hidden()

vorpal
  .command('init', 'Sets up your project to use Helm with Drone')
  .action((args, callback) => {
    vorpal.ui.delimiter('> ')
    init(vorpal.activeCommand)
  })

vorpal
  .command('secret <name> <value>', 'Add a secret to your config')
  .option('-i, --image <image>', 'Specify an image in which to inject this secret')
  .action((args, callback) => {
    console.log('adding secret', args.name)
  })

vorpal
  .delimiter(' ')
  .parse(process.argv)
  .use(asDefault, 'help')
  .exec('exit')
