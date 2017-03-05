import path from 'path'
import getModulePath from 'get-installed-path'
import dirTree from 'directory-tree'
import Notifier from '../services/notifier'
import File from '../models/file'

export default class Installer extends Notifier {
  constructor (view) {
    super()
    this.view = view
  }
  async run () {
    await this.setup()
    return this.copy(this.tree)
  }
  async setup () {
    this.target = process.cwd()
    const source = await getModulePath('dronify')
    this.source = path.resolve(source, 'templates')
    this.tree = dirTree(this.source)
  }
  copy (node) {
    if (node.children) return node.children.map(this.copy.bind(this))
    const file = new File(node, this.source)
    return file.render(this.view, this.target)
  }
}
