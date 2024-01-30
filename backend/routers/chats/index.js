const express = require('express');
const Route = express.Router();
const chatController = require('../../controllers/chats');

Route.post('/',chatController.createChat);
Route.get('/:userId',chatController.findUserChats);
Route.get('/find/:firstId/:secondId',chatController.findChat);

module.exports = Route;