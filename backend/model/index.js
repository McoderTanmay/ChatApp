const sequelize=require('sequelize');
const userModel=require('./users');
const chatModel = require('./chat');

exports.db_config=new sequelize(
    'chat_app',
    'root',
    'Tanmay@221133',
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases:0,
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000,
        },
        timezone:'+05:30',
        logging:false,
    }
);

exports.userModel = userModel(exports.db_config);
exports.chatModel = chatModel(exports.db_config); 