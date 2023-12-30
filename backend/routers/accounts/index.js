const express = require('express')
const Route = express.Router()
const userController = require('../../controllers/users')

Route.post('/signin',userController.signin);
Route.post('/login',userController.login);

module.exports= Route;