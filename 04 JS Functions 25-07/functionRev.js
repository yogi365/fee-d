// function functionName(name, lastname){
//     // console.log("Hello")
//     return "Hello! "+name+" "+lastname;
// }

// functionName("Amit","Singh");

// var abc = function(name, lastname){
//     return "Hello! "+name+" "+lastname;
// }

// var abc = (name,lastname)=>{
//     return "Hello! "+name+" "+lastname;
// }

// var abc = name=> "Hello! "+name;


// console.log(abc("Amit"));


//callback


// var arithmeticOperations = function(n1,n2,operations){
//     var ans;
// switch(opertation){

//     case "sum":
//         ans = sum(n1,n2);
//         break;
//     case "subtration":
//         ans = n1 - n2;
//         break;
//     case "multipy":
//         ans = n1 * n2;
//         break;
//     case "Divide":
//         ans = n1 / n2;
//         break;
//     default:
//         ans="invalid operation";
// }
// return ans;
// }

var arithmeticOperations = function(n1,n2,opreations){
    var a = n1**2;
    var b = n2**2;
    return opreations(a,b)
}

// var result = arithmeticOperations(9,2,sum);
var result = arithmeticOperations(9,2,(n1,n2)=>n1+n2)

function sum(n1,n2){
    return n1+n2;
}

function diff(n1,n2){
    return n1-n2;
}

function mul(n1,n2){
    return n1*n2;
}

function divide(n1,n2){
    return n1/n2
}


console.log(result)
