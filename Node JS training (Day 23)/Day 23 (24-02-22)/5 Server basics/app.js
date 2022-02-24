const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("Welcome to page");
    res.end();
})
server.listen(4000)
console.log(http)