const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const model=require('./model');
const USER_ROUTER=require('./routers/accounts');
const CHAT_ROUTER=require('./routers/chats');
const MESSAGE_ROUTER = require('./routers/messages');

app.use('/accounts',USER_ROUTER);
app.use('/chats',CHAT_ROUTER);
app.use('/messages',MESSAGE_ROUTER);

//syncronization
model.db_config
.sync({

}).then(()=>{
    console.log('connected to database')
})
.catch((error)=>{
    console.log("Could cot connect to database ",error);
    process.exit();
});

app.listen(5000,()=>{
    console.log('App is running on port 5000');
});