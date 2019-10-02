const Router = require('koa-router')
const { TYPES } = require('../constants/todo')
const todoIoc = require('../ioc/todo')
const router = new Router()

const todoController = todoIoc.use(TYPES.todoContainer)

router.get('/todo/todos', todoController.getTodos())
router.get('/todo/todo/:id', todoController.getTodo())

module.exports = app => app.use(router.routes()).use(router.allowedMethods())
