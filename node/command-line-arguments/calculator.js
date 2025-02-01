var [, ,a,b,c,operator] = process.argv;
a = parseInt(a);//ES5
b = Number(b);//ES6
c = +c;

switch(operator){
    case '+' : console.log('sum of 3 digits is:',a+b+c);break;
    case '-' : console.log('sub of 3 digits is:',a-b-c);break;
    case 'default' : console.log('mul of 3 digits is:',a*b*c);break;
}

//input provided: 40 20 10 + 
/*
output:
sum of 3 digits is: 70
*/

//input provided: 40 20 10 -
/*
output:
sub of 3 digits is: 10
*/

