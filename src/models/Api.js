const SafeRequest = require('../utils/safeRequest')
const { BASE_URL } = require('../config')
const safeRequest = new SafeRequest(BASE_URL.api)

class Api {
  constructor() {}
  async getApi() {
    const data = await safeRequest.fetch('/posts', {
      method: 'GET'
    })
    return data
  }
}

module.exports = Api
