const express=require('express');
const app=express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

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

app.listen(5000,()=>{
    console.log('App is running on port 5000');
});