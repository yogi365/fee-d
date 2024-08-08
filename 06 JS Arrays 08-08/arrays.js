// var arr = [8,5,11,12,1,4,5,6,18];
// arr.reverse();
// var str = arr.toString();
// arr.sort((a,b)=>b-a);
// console.log(arr);

//Create a new array of odd numbers.
//Create a new array of even number
//Calculate square of each elements and store them in new Array.

// var oddArray = [];
// var evenArray = [];
// var squaredArray = [];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         oddArray.push(arr[i])
//     }
//     else{
//         evenArray.push(arr[i])
//     }

//     squaredArray.push(arr[i]*arr[i])
// }
// var arr = [8,5,11,12,1,4,5,6,18];
// const iterator = function(arr,callback){
//     const newArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(callback(arr[i],i,arr)){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }


// var oddArray = iterator(arr, (element)=>element%2!=0 );
// var evenArray = iterator(arr,(element)=>element%2==0);

// var arr = [8,5,11,12,1,4,5,6,18];

// var evenArray = arr.filter((element)=>element%2==0);
// var oddArray = arr.filter((element)=>element%2!=0)
// console.log(oddArray,evenArray);

// map, filter, forEach, find, reduce, sort

// var arr = [8,5,11,12,1,4,5,6,18];

// var squaredArray = arr.map((element, index, array)=>
//     element*element
// )

// var customMap = function(arr,callback){
//     var newArr = [];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(callback(arr[i]), index, arr);
//     }
//     return newArr;
// }

// var evenArray = arr.map((ele)=>{
//     if(ele%2==0){
//         return ele;
//     }

//     return 0;
// })


// console.log(evenArray)

// var customForEach = function(arr,cb){
//     for(let i =0;i<arr.length;i++){
//         cb(arr[i],i,arr);
//     }
// }

// var arr = [8,5,11,12,1,4,5,6,18];

// arr.forEach((element, index, array)=>{
//     console.log(array)
// })


// var arr = [8,5,11,12,1,4,5,6,18];

// var value = arr.find((ele)=>ele%2==0);
// console.log(value)