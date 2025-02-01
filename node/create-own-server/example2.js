const http = require('http');
const url = require('url');
const server = http.createServer((req,res)=>{
    if(req.url === '/home' || req.url === '/'){
        res.write('welcome to home page.');
        res.end();
    } else if(req.url === '/list'){
        res.end("welcome to list page.");
    }  else if(req.url === '/detail'){
        res.writeHead(200);
        res.write('welcome to detail page.');
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


