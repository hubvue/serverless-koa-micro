class ApiController {
  constructor(api) {
    this.api = api
  }
  getApi() {
    return async (ctx, next) => {
      const data = await this.api.getApi()
      ctx.body = data
    }
  }
}

module.exports = ApiController
