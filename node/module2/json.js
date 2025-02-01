//plain javascript object ---->key--optional, value---double quotes or single quotes mandatry
//json --key--must use double quotes, value is string it will also comes with double quotes

const jsObj = {
    name : "harshu",
    age: 6,
    class : 'second',
}
console.log(jsObj);

const jsonData = JSON.stringify(jsObj);//to convert normal  js object to json object
console.log(jsonData);
console.log("access the properties of obj");
console.log('get name from js obj',jsObj.name);
console.log('get name from json obj',jsonData.name);
//from JSON obj we cant access property as we do in js obj
/*
output:
{ name: 'harshu', age: 6, class: 'second' }
{"name":"harshu","age":6,"class":"second"}
access the properties of obj
get name from js obj harshu
get name from json obj undefined
*/
