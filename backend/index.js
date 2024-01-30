const express=require('express');
const app=express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const model=require('./model');
const USER_ROUTER=require('./routers/accounts');

app.use('/accounts',USER_ROUTER)
//Database
const {userModel,chatModel} = require('./model');

//association
userModel.hasMany(chatModel,{foreignKey:'senderID'});
chatModel.belongsTo(userModel,{foreignKey:'senderID'});

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