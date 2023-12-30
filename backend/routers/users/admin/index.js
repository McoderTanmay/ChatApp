const express = require('express')
const Route = express.Router()
const userController = require('../../controllers/users')

Route.post('/deleteUser',userController.deleteUser);

module.exports= Route;