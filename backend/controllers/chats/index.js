const chatQuery = require('../../querries/chats');

module.exports = {
    async createChat(req, res) {
        const senderID = req.body.senderID;
        const receiverID = req.body.receiverID;

        try {
            const chat = await chatQuery.findChat(senderID, receiverID);
            const chat2 = await chatQuery.findChat( receiverID, senderID);

            if(chat){
                return res.status(200).json(chat);
            }
            else if(chat2){
                return res.status(200).json(chat2);
            }

            const newChat = chatQuery.createChat(senderID, receiverID);
            res.status(200).json(newChat);
        } catch (error) {
            console.log("chat error ",error);
            res.status(500).json(error);
        }
    },
    async findUserChats(req, res){
        const userID = req.params.userId;

        try {
            const chat = await chatQuery.findChats(userID);
            res.status(200).json(chat);
        } catch (error) {
            console.log("chat error ",error);
            res.status(500).json(error);
        }
    },
    async findChat(req, res){
        const firstId = req.params.firstId;
        const secondId = req.params.secondId;
        try {
            let chat = await chatQuery.findChat(firstId, secondId);
            let chat2 = await chatQuery.findChat(secondId, firstId);

            if(chat){
                return res.status(200).json(chat);
                
            }
            else if(chat2){
                return res.status(200).json(chat2);
            }
           
        } catch (error) {
            console.log("chat error ",error);
            res.status(500).json(error);
        }
    }
}