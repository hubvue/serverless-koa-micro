const IOC = require('./ioc')
const { TYPES } = require('../constants/todo')
const ioc = new IOC()

// constrollers
const TodoController = require('../controllers/TodoController')

// models
const Todo = require('../models/Todo')

ioc.bind(
  TYPES.todoContainer,
  (...args) => new TodoController(new Todo(...args))
)

module.exports = ioc
