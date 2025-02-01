//create server
const express = require('express')
//create express application
const app = express();

//define the routes

app.get('/string',(req,res)=>{
    res.write('<h1>welcome to:</h1>');
    res.write('<h4>home page</h4>');
    res.send();
})

app.get('/array',(req,res)=>{
    res.status(200);
    res.send(
        [
            {
                "id": 1,
                "title": "title1",
                "price": 1099,
                "discountPercentage": 11.83,
                "rating": 4.54    
            },
            {
                "id": 2,
                "title": "title1",
                "price": 1099,
                "discountPercentage": 11.83,
                "rating": 4.54    
            }
        ]
    );
})

app.get('/number',(req,res)=>{
    res.status(200);
    res.send(30);
})

app.get('/object',(req,res)=>{
    res.send({
        "id": 1,
        "title": "title1",
        "price": 1099,
        "discountPercentage": 11.83,
        "rating": 4.54    
    });
})

app.get('/contact-us',(req,res)=>{
    res.status(400);
    res.send('welcome to contact-us page');
})

app.get('/html',(req,res)=>{   
    res.send('<h2>Requested page is unavailable</h2>');
})

//listen to the requests
app.listen(8080,(err)=>{
    if(err){
        throw error;
    } else {
        console.log("server listening to port no 8080");
    }
})