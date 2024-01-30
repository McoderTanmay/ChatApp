const express = require('express');
const Route = express.Router();
const messageController = require('../../controllers/messages');

Route.post('/',messageController.createMessage);
Route.get('/:chatID',messageController.getMessages);

module.exports = Route;