const express=require('express');
const app=express();
app.use(express.json());

const model=require('./model');
const USER_ROUTER=require('./routers/accounts');

app.use('/accounts',USER_ROUTER)

model.db_config
.sync({

}).then(()=>{
    console.log('connected to database')
})
.catch((error)=>{
    console.log("Could cot connect to database ",error);
    process.exit();
});

app.listen(3000,()=>{
    console.log('App is running on port 3000');
});