//Destructuring Easily extract the array elements and object properties and stored in variables
// For Array
// [a,b]=["vijay","Nagre"]
// console.log(a) vijay
// console.log(b) nagre
// For Objects
// {name}={name:"vijay",surname:"nagre"}
// console.log(name) vijay
// // console.log(surname) undefined
const numbers = [1, 2, 3];
const [num1, , num3] = numbers;
console.log(num1, num3);
