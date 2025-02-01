const fs = require('fs');
var folderRef=null;
var folderRef2=null;

//create directory in synchronous way
/* if(!folderRef){   
    folderRef = fs.mkdirSync('harshu'); //it returns undefined so using if also waste 
}


if(!folderRef2){
    folderRef2 = fs.mkdir('rishu',(err) =>{
        if(err) {
            console.log("error",err);
    } else {
        console.log("successfully created folder");
    }
    });
} */


/*
output:
    successfully created folder
*/

//write data to the file

fs.writeFileSync('harshu/welcome.txt','welcome to');
 //if we use second time it will override the content of a file to overcome that we use appendFileSync
 fs.writeFile('rishu/welcome.txt','welcome to node session',(err) =>{
    if(err) {
        console.log("error",err);
    } else {
        console.log("entered data into file successfully");
    }
});

/*
output:
    entered data into file successfully
*/

//append  data to the file

fs.appendFileSync('harshu/welcome.txt',' node js session harshu');
 fs.appendFile('rishu/welcome.txt',' rishu',(err) =>{
    if(err) {
        console.log("error",err);
    } else {
        console.log("appended data into file successfully");
    }
});

/*
output:
    appended data into file successfully
*/



//Read data from  the file ---default i.e buffer data

let dataAdded = fs.readFileSync('harshu/welcome.txt');
console.log(dataAdded);
 fs.readFile('rishu/welcome.txt',(err,data) =>{
    if(err) {
        console.log("error",err);
    } else {
        console.log(data);
    }
});

//Note : In node.js we have an additional data type called buffer which is not available in javascript,buffer is used to store binary data8u ,By default filesystem reads data as Buffer Type, To overcome that we have to use file encodeing 'UTF8' or use toString()
/*
output:
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 6e 6f 64 65 20 6a 73 20 73 65 73 73 69 6f 6e 20 68 61 72 73 68 75>
    entered data into file successfully
    appended data into file successfully
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 73 65 73 73 69 6f 6e 20 72 69 73 68 75>
*/

//Read data from  the file ---using toString()
let dataAdded2 = fs.readFileSync('harshu/welcome.txt');
console.log(dataAdded2.toString());
 fs.readFile('rishu/welcome.txt',(err,data) =>{
    if(err) {
        console.log("error",err);
    } else {
        console.log(data.toString());
    }
});

/*
output:
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 6a 73 20 73 65 73 73 69 6f 6e 20 68 61 72 73 68 75>
    welcome to node js session harshu
    entered data into file successfully
    appended data into file successfully
    welcome to node session rishu
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 73 65 73 73 69 6f 6e 20 72 69 73 68 75>
*/

//Read data from  the file ---using file encoding like 'utf8,utf16'
let dataAdded3 = fs.readFileSync('harshu/welcome.txt','utf8');
console.log(dataAdded3.toString());
 fs.readFile('rishu/welcome.txt',(err,data) =>{
    if(err) {
        console.log("error",err);
    } else {
        console.log(data.toString());
    }
});

/*
output:
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 6a 73 20 73 65 73 73 69 6f 6e 20 68 61 72 73 68 75>
    welcome to node js session harshu
    welcome to node js session harshu
    entered data into file successfully
    appended data into file successfully
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 73 65 73 73 69 6f 6e 20 72 69 73 68 75>
    welcome to node session rishu
    welcome to node session rishu
*/

//delete file 
/* fs.unlinkSync('deleteHarshu/text.txt');
fs.unlink('deleteRishu/text.txt',(err) =>{
    if(err) {
        console.log("error",err);
    } else {
        console.log("file deleted successfully.");
    }
}) */

/*
output:
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 6a 73 20 73 65 73 73 69 6f 6e 20 68 61 72 73 68 75>
    welcome to node js session harshu
    welcome to node js session harshu
    file deleted successfully.
    entered data into file successfully
    appended data into file successfully
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 73 65 73 73 69 6f 6e>
    welcome to node session
    welcome to node session
*/


fs.rmdirSync('deleteHarshu');
fs.rmdir('deleteRishu',(err) =>{
    if(err) {
        console.log("error",err);
} else {
    console.log("successfully deleted folder");
}
});

/*
Output:
  1)  Error: ENOTEMPTY: directory not empty
  2)
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 6a 73 20 73 65 73 73 69 6f 6e 20 68 61 72 73 68 75>
    welcome to node js session harshu
    welcome to node js session harshu
    successfully deleted folder
    entered data into file successfully
    appended data into file successfully
    welcome to node session
    <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 73 65 73 73 69 6f 6e>
    welcome to node session
*/
