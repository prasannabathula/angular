const http = require('http');

//create our own server with help of http 

//create server which takes req from browser and process it and send res back to the browser
const server = http.createServer((req,res)=>{
    //sending response to browser
    res.end("welcome to the app.");
})

//to get request from browser we have to listen to those requests.portno-hostname-callback

server.listen(8000,'127.0.0.1',()=>{
    console.log('server listening to port no 8000');
})


