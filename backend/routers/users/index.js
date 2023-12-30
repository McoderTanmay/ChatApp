const express = require('express')
const Route = express.Router()
const userController = require('../../controllers/users')

Route.post('/createuser',userController.createuser);
Route.get('/login',userController.login);

module.exports= Route;