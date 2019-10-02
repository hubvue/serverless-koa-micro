const IOC = require('./ioc')
const { TYPES } = require('../constants/api')
const ioc = new IOC()

// constrollers
const ApiController = require('../controllers/ApiController')

// models
const Api = require('../models/Api')

ioc.bind(TYPES.apiContainer, (...args) => new ApiController(new Api(...args)))

module.exports = ioc
