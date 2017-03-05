import Mustache from 'mustache'
import { readFile, writeFile, mkdirs } from 'fs-promise'
import path from 'path'

Mustache.tags = [ '||', '||' ]

export default class File {
  constructor ({ path, name }, source) {
    this.path = path
    this.name = name
    this.source = source
  }
  get relative () {
    const nameRegex = new RegExp(`${this.name}$`)
    return this.path
      .replace(this.source, '')
      .replace(nameRegex, '')
  }
  async readFile () {
    const buffer = await readFile(this.path)
    return buffer.toString()
  }
  async render (view, to) {
    const template = await this.readFile()
    const rendered = Mustache.render(template, view)
    const target = path.join(to, this.relative)
    const renderedTarget = Mustache.render(target, view)
    await mkdirs(renderedTarget)
    return writeFile(path.join(renderedTarget, this.name), rendered)
  }
}
