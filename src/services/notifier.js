export default class Notifier {
  events = []
  on (event, fn) {
    this.events[event] = fn
  }
  notify (event, ...payload) {
    this.events[event](...payload)
  }
}
