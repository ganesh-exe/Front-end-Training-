const express=require('express')
const app=express();
const products=require('./products')
const users=require('./users')

app.get('/',(req,res)=>{
    res.send("<h1>This is the main page</h1>")
})
app.use('/products',products)
app.use('/users',users)

app.listen(4000);