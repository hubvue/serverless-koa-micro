class IOC {
  constructor() {
    this.container = new Map()
  }
  bind(key, callback) {
    this.container.set(key, {
      callback,
      singleton: false
    })
  }
  singleton(key, callback) {
    this.container.set(key, {
      callback,
      singleton: true
    })
  }
  use(key, ...args) {
    const item = this.container.get(key)
    if (!item) {
      throw new Error('item not in ioc container')
    }
    if (item.singleton && !item.instance) {
      item.instance = item.callback(...args)
    }
    return item.singleton ? item.instance : item.callback(...args)
  }
}
module.exports = IOC
