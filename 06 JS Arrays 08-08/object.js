// var obj = new Object();
// var student = {
//     "First Name":"Abc",
//     age:14,
//     contactNumber:123456780
// };

// student.age = 17;
// student["firstName"] = "Xyz";


// console.log(student.age)
// console.log(student["age"])
// console.log(student["First Name"])

var student = {
    "First Name":"Abc",
    age:14,
    contactNumber:123456780,
    marks:[24,26,21,20,30]
};

student.marks.forEach((mark,index,marks)=>{
    marks[index]=mark+10;
})


console.log(student)


