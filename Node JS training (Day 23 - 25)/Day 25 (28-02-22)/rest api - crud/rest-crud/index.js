const express=require('express');
const app=express();
app.use(express.json());

let userList=[
    {
    id:1,name:"ganesh",email:"g@g.com"
    },
    {
    id:2,name:"muruga",email:"m@m.com"
    },
    {
    id:3,name:"krishna",email:"k@k.com"
    },
    {
    id:4,name:"venky",email:"vv@v.com"
    },
]

app.get('/',(req,res)=>{
    res.send("Main page");
});

app.get('/users',(req,res)=>{
    res.send(userList);
});

app.post('/users',(req,res)=>{
    const newUser=req.body;
    userList.push(newUser)
});

app.delete('/users/:id',(req,res)=>{
    const userId=req.params.id;
    const newUserList=userList.filter(item=>item.id!=userId);
    userList=[...newUserList]
});

app.put('/users/',(req,res)=>{
    const newEmail=req.body.newEmail;
    userList.forEach(item=>item.email=newEmail)
    // userlist.forEach(item=>{
    //     if(item.id!=id)
    //     {item.email=newemail
    //         res.json();}
    // });
})

app.listen(8080,()=>{
    console.log("server running ")
})
