"use strict";
var username = 'Mike watson';
var age = 65;
//array type
var numArray = [10, 20, 30, 40, 50, 60];
console.log(numArray);
// //tuple
var person = ['Ankit', 60];
//object
var user = { fname: "Ankit", age: 25 };
//any datatype
let data = 42;
data = "Now a string"; //o/p : No error
//unknown
let input = "Hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
//void : used for functions that do not return a value
function logMessage() {
    console.log('This function returns nothing');
}
//never : used for functions that never return (e.g. throwing errros or infinite loop)
function throwError() {
    throw new Error('Something went wrong');
}
//Union : A variable can hold multiple types
let value;
value = 'Hello world';
value = 100;
let lead = { fname: "Ankit", department: "Engineering" };
let userId = "user123";
//enum : defines named constants
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
//literal type : restricts a value into a specific set
let direction;
direction = 'up'; //ok
// direction = 'left'; //Error
//function type : define the type of a function
let add;
add = (x, y) => x + y;
