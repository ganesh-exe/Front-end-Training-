const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("<h3>This is the Product page</h3>")
})

router.get('/product-details',(req,res)=>{
    res.send("<h3>This is the Product details page </h3>")
})

module.exports=router;