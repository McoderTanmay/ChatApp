const chatModel = require('../../model').chatModel;
const { Op } = require('sequelize');

module.exports = {
    async findChat(senderID, receiverID){
        return await chatModel.findOne({
            where:{
                senderID:senderID,
                receiverID:receiverID   
            }
        })
    },
    async createChat(senderID, receiverID){
        const data = {
            senderID:senderID,
            receiverID:receiverID
        }
        return await chatModel.create(data);
    },
    async findChats(UserId){
        return await chatModel.findAll({
            where:{
                [ Op.or ]:[
                    { senderID:UserId },
                    { receiverID:UserId }
                ]
            }
        })
    }
}