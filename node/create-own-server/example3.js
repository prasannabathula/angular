const http = require('http');
const url = require('url');
const fs = require('fs');

const data = fs.readFileSync('sample.json','utf8');
console.log(data);

const server = http.createServer((req,res)=>{
  if(req.url === '/detail' || req.url === ''){
        res.writeHead(200,{"contnt-type":"appliction/json"});
        res.write('welcome to detail page.');
        res.write(data);
        res.end();
    }  else{
        res.writeHead(404,{"contnt-type":"text/html"});
        res.write('404 error pages.page does not exist');
        res.end();
    } 
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server listening to port no 8000');
})


