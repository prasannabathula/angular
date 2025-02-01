//create server
const express = require('express')
//create express application
const app = express();

//define the routes

app.get('/string',(req,res)=>{
    res.status(200);
    //res.write('home page'); //can't use with res.json
    res.json('home page');
})

app.get('/array',(req,res)=>{
    res.json(
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
    res.json(30);
})

app.get('/object',(req,res)=>{
    res.json({
        "id": 1,
        "title": "title1",
        "price": 1099,
        "discountPercentage": 11.83,
        "rating": 4.54    
    });
})

app.get('/contact-us',(req,res)=>{
   
    res.json('welcome to contact-us page');
})

app.get('/html',(req,res)=>{   
    res.write('<h2>Requested page is unavailable</h2>');
    res.json();
})

//listen to the requests
app.listen(8080,(err)=>{
    if(err){
        throw error;
    } else {
        console.log("server listening to port no 8080");
    }
})