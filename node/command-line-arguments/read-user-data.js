const { parse } = require("path");

//It returns array of strings
console.log(process.argv) ;
/*
output:
[
  'C:\\Program Files (x86)\\nodejs\\node.exe',//where we installed node js
  'D:\\practise\\node\\command-line-arguments\\read-user-data.js'//current file path
]
*/

//input provided: 20 welcome
/*
output:
[
  'C:\\Program Files (x86)\\nodejs\\node.exe',
  'D:\\practise\\node\\command-line-arguments\\read-user-data.js',
  '20',
  'welcome'
]
*/

//covert string to required data type using js.here we are destructing and storing into variables
const [, ,...inputProvided] = process.argv;
console.log(inputProvided);
/*
output:
[ '20', 'welcome' ]
*/
inputProvided.forEach((obj)=>{
    console.log(obj);
})
