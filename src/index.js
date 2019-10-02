const serverless = require('serverless-http')
const todoApp = require('./apps/todo')
const apiApp = require('./apps/api')

module.exports.todo = serverless(todoApp)
module.exports.api = serverless(apiApp)
