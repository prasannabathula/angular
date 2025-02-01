const importobj = require('./export');
console.log(importobj);
console.log(importobj.favColours);
console.log(importobj.sum(12,13));
/*
output:
{
  name: 'harshu',
  harshuObj: { name: 'harshu', class: 'second' },
  favColours: [ 'blue', 'skyblue' ],
  sum: [Function: sum]
}
[ 'blue', 'skyblue' ]
25
*/
