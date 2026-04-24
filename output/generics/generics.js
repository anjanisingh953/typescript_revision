"use strict";
//Generics are template, generics make our code reusable
//Generics in typescript allow us to create reusable components that work with a
//variety of data types while maintaining type safety.
//Basically generics are functions
function fruits1(data) {
    return data;
}
// Here we get dynamic return type of a function
let onlyfruit = fruits1('apple');
let onlyNum = fruits1(10);
let onlyBool = fruits1(true);
// console.log(typeof onlyfruit)
//If we use any then we will get always return type 'any' for the function
function fruits2(name) {
    return name;
}
const onlyfruit2 = fruits2('apple');
const onlyNum2 = fruits2(10);
const onlyBool2 = fruits2(true);
console.log(typeof onlyBool2);
//How to pass dynamic datatype for array 
function User18(data) {
    return [data];
}
let userCollection = User18(['sam', 'vivek']);
function pair(a, b) {
    return [a, b];
}
let data1 = pair("Ginger Tea", 20);
let data2 = pair('Masala Tea', { flavor: "ginger" });
console.log(data1);
console.log(data2);
let numberBox = { content: 'coffee' };
let numberBox2 = { content: 100 };
//# sourceMappingURL=generics.js.map