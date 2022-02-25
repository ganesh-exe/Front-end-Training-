const http=require('http');
const url=require('url');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const path=req.url;
    if(path=="/"){
        res.writeHead(200,{
            "content-type":"text/html",
        })
        const filed=fs.readFileSync("./index.html");
        res.write(filed);
        res.end();
    } else if(path=="/about"){
        res.writeHead(200,{
            "content-type":"text/html",
        })
        const about=fs.readFileSync("./about.html");
        res.write(about);
        res.end();
    }else if(path=="/contact"){
        res.writeHead(200,{
            "content-type":"text/html",
        })
        const contact=fs.readFileSync("./contact.html");
        res.write(contact);
        res.end();
    }
    console.log(path);
});
server.listen(4000);