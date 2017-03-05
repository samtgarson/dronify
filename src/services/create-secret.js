import path from 'path'
import { readdirSync, readFile, writeFile } from 'fs-promise'
import yaml from 'js-yaml'

export default class CreateSecret {
  constructor ({ name, value, cmd, strategies, options }) {
    this.name = name
    this.key = name.toLowerCase()
    this.value = value
    this.cmd = cmd
    this.strategies = strategies
    this.options = options
  }
  get base () {
    return `charts/${readdirSync('charts')[0]}`
  }
  async run () {
    let success = true
    for (var s of this.strategies) {
      let success = await this.addToCharts(s)
      if (!success) break
    }
    return success
  }
  async addToCharts (strategy) {
    const target = path.join(this.base, strategy.path)
    const content = yaml.load(await readFile(target))
    const { key, name, value, options, cmd } = this
    const result = await strategy.action({ cmd, key, name, value, options, content })
    if (!result) return
    const rendered = yaml.dump(content)
    await writeFile(target, rendered)
    return true
  }
}
