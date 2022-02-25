const { readFile, writeFile } = require('fs');

const read=readFile('./abc.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
    }
    console.log(res);
})
writeFile('./xyz.txt','hello',(err,res)=>{
    if(err){
        console.log(err);
    }
    //console.log(res);
})
const readtwo=readFile('./xyz.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
    }
    console.log(res);
})
console.log(read)
console.log(readtwo)
console.log("hii");