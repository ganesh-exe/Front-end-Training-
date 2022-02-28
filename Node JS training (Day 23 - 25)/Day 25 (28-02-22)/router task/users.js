const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{
    res.send(" <h3>This is the Users page </h3>")
})

router.get('/user-details',(req,res)=>{
    res.send(" <h3>This is the User details page </h3>")
})

module.exports=router;