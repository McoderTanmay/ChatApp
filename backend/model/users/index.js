const {DataTypes,INTIGER} =  require('sequelize')
const { db_config } = require('../index')

module.exports=(db_config)=>{
    const user =db_config.define(
        'user',{
            uid:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            FirstName:{
                type:DataTypes.STRING
            },
            LastName:{
                type:DataTypes.STRING
            },
            UserName:{
                type:DataTypes.STRING,
            },
            password:{
                type:DataTypes.STRING
            }
        }
    );
    return user;
}