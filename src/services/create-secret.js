import path from 'path'
import { readFile, writeFile } from 'fs-promise'
import yaml from 'js-yaml'

export default class CreateSecret {
  constructor ({ view, cmd, strategies }) {
    this.cmd = cmd
    this.strategies = strategies
    this.view = view
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
    const target = strategy.path
    const content = yaml.load(await readFile(target))
    const { view, cmd } = this
    const result = await strategy.action({ ...view, cmd, content })
    if (!result) return
    const rendered = yaml.dump(result, { lineWidth: 120 })
    await writeFile(target, rendered)
    return true
  }
}
