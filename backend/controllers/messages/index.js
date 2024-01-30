const messageQuery = require('../../querries/messages')

module.exports = {
    async createMessage(req, res){
        const chatID = req.body.chatID;
        const senderID = req.body.senderID;
        const text = req.body.text;
        const data = {
            chatID:chatID,
            senderID:senderID,
            text:text
        }
        try {
            const message = messageQuery.createChat(data);
            res.status(200).json(message);
        } catch (error) {
            console.log("message error ",error);
            res.status(500).json(error);
        }
    },
    async getMessages(req, res){
        const chatID = req.params.chatID;

        try {
            const message = await messageQuery.findMessage(chatID);
            res.status(200).json(message);
        } catch (error) {
            console.log("message error ",error);
            res.status(500).json(error);
        }
    }
}