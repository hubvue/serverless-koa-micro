const Router = require('koa-router')
const { TYPES } = require('../constants/api')
const apiIoc = require('../ioc/api')
const router = new Router()

const apiController = apiIoc.use(TYPES.apiContainer)

router.get('/api/test', apiController.getApi())

module.exports = app => app.use(router.routes()).use(router.allowedMethods())
