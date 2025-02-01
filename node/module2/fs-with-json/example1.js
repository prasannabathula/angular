const filesys = require('fs');
const jsObj = {
    name : "harshu",
    age: 6,
    class : 'second',
}

//convert to json
const jsonData = JSON.stringify(jsObj);

//store data into the file
filesys.writeFile('sample.json',jsonData,(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("successfully sent data to file");
    }
})

//read data from the file 
filesys.readFile('sample.json','utf8',(err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log("json data",data);
        //convert json data to normal js obj
        console.log("norml js obj data",JSON.parse(data));
    }
})

/*
output:
successfully sent data to file
json data {"name":"harshu","age":6,"class":"second"}
js obj data { name: 'harshu', age: 6, class: 'second' }
*/
