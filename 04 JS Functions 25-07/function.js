// function functionName(firstName, lastName){
//     return firstName+" "+lastName;
// }

// console.log(functionName('xyz','abc'));
// console.log(functionName(5,6));
// console.log(functionName(5,true));
// console.log(functionName(5));
// console.log(functionName(5,6,"Hello"));


// function functionName(firstName, lastName){
//     if(lastName==undefined){
//         lastName="Singh";
//     }
//     return firstName+" "+lastName;
// }


// function functionName(firstName, lastName="Singh"){
//     return firstName+" "+lastName;
// }

// console.log(functionName('Yuvraj'));
// console.log(functionName('Yuvraj',"Kumar"));

// var a = a+b;

// function sum(){
//     return 1+2;
// }

// var operation = sum;

// console.log(operation())

// var functionName = function(num1,num2){
//     return num1+num2;
// }
// functionName();
// console.log(functionName(5,9))

// sum()

// function sum(num1,num2){
//     return num1+num2;
//     // console.log("Hello")
// }

// function sum(num1){
//     return num1+5;
// }

// console.log(sum(10,2));

// var sayHello = function(){
//     console.log('Saying Hello');
// }

// function sayHello(){
//     console.log('Saying Hello again');
// }

// sayHello();


// const sayHello = function(){
//     console.log('Saying Hello');
// }

// function sayHello(){
//     console.log('Saying Hello again');
// }

// sayHello();


// const sum = function(a,b){
//     return a+b;
// }

// const sum = (a,b)=>{
//     console.log(a+b);
// }

// sum(5,3);

// const sum = a => {
//    return a+5;
// }

// console.log(sum(5))

// const sum = (a,b) => a+b;
 
 
//  console.log(sum(5))

//iife - imediate invoking function execution


// (
//     function (a,b){
//         console.log(a+b);
//     }
// )(5,8)


function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return b-a;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

// function arithmeticOperation(a,b,operation){
//     var result=null;
//     switch(operation){
//         case "sum":
//             result= sum(a,b);
//             break;
//         case "subtract":
//             result= subtract(a,b);
//             break;
//         case "multiply":
//             result = multiply(a,b);
//             break;
//         case "divide":
//             result = divide(a,b);
//             break;
//         default:
//             result = 'invalid';

//     }
//     return result;
// }

function arithmeticOperation(a,b,operation){    
    return operation(a,b);
}

// console.log(arithmeticOperation(10,6,sum));
// console.log(arithmeticOperation(10,6,subtract));
// console.log(arithmeticOperation(10,6,multiply));
// console.log(arithmeticOperation(10,6,divide));

var result = arithmeticOperation(a,b,function(a,b){
    return a+b;
})

var result = arithmeticOperation(a,b,(a,b)=>a+b);