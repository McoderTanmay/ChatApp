const {DataTypes, INTIGER} = require('sequelize');
const { db_config } = require('../index');

module.exports=(db_config)=>{
    const message = db_config.define(
        'message',{
            senderID:{
                type:DataTypes.INTEGER,
                allowNull:false,
            },
            message:{
                type:DataTypes.TEXT,
                allowNull:false,
            },
        }
    );
    return message;
}