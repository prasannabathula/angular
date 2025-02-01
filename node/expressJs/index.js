//create server
const express = require('express')
//create express application
const app = express();

//to serve static files
app.use(express.static('public'));

//specify template engine what we are using
app.set('view engine',"ejs");

//set the custom views folder
app.set('views','./templates');

//define the routes
app.get('/',(req,res)=>{
    res.send('welcome to default home page');
})

app.get('/ejs',(req,res)=>{
    res.render('home',{'title':"welcome to template engines: EJS"});
})

app.get('/about',(req,res)=>{
    res.render('about',{'about':"welcome to template engines: about page",about2:"hello"});
})

app.get('/about/*',(req,res)=>{
    res.render('404',{'errorcode':"Page Not found in about",about2:"hello"});
})

app.get('*',(req,res)=>{
    res.render('404',{'errorcode':'Page Not Found'})
})

//listen to the requests
app.listen(8081,(err)=>{
    if(err){
        throw error;
    } else {
        console.log("server listening to port no 8081");
    }
})