const messageModel = require('../../model').messageModel;

module.exports = {
    async createChat (data){
        return await messageModel.create(data);
    },
    async findMessage(chatID){
        return await messageModel.findAll({
            where:{
                chatID:chatID
            }
        });
    }
}