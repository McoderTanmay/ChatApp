const {DataTypes, INTIGER} = require('sequelize');
const { db_config } = require('../index');

module.exports = (db_config) => {
    const chatText = db_config.define(
        "chatText",{
            chatID:{
                type:DataTypes.INTEGER
            },
            senderID:{
                type:DataTypes.INTEGER
            },
            text:{
                type:DataTypes.STRING
            }
        }
    )
    return chatText;
}