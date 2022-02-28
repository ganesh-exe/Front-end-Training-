const express=require('express');
const app=express();
const mongoose=require('mongoose');
const userModel=require('./models/users');

app.use(express.json());

//connecting mongo db
mongoose.connect("mongodb://localhost:27017/crudTut",{useNewUrlParser:true});


//creating manually
app.get('/insert', async(req,res)=>{
    const user=new userModel({name:"Shyam",age:"21"});
    await users.save();
    res.send("Added")
})

app.get('/read',async (req,res)=>{
    await userModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

app.listen(3001,()=>{
    console.log("server running")
})