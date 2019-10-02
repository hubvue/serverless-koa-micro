const Koa = require('koa')
const router = require('../routes/api')
const middleware404 = require('../middlewares/middleware_404')
const app = new Koa()

// 404容错
middleware404(app)
// 注册路由
router(app)

module.exports = app
