const express = require('express')

const registerRouter = express.Router()

const { getAllRegister, getIdRegister, createRegister, updateRegister, deleteRegister } = require('../controllers/registration.controller')

registerRouter.get('/', getAllRegister)
registerRouter.get('/:id', getIdRegister)
registerRouter.post('/', createRegister)
registerRouter.patch('/:id', updateRegister)
registerRouter.delete('/:id', deleteRegister)

module.exports = { registerRouter }