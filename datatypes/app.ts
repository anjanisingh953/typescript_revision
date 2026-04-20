var username:string = 'Mike watson';
var age:number = 65;

//undefined : we use undefined when we want to assign any type of value dynamically
var userName:undefined=undefined

//bigint
var bigNumber:bigint = 9007199254740991n;
var x = 1n;
var y = 7n;
console.log(bigNumber + x)


//array type
var numArray:number[] = [10,20,30,40,50,60];
console.log(numArray)

// //tuple
var person:[string,number] = ['Ankit',60];

//object
var user:{fname:string, age:number} = {fname:"Ankit",age:25};

//any datatype
let data:any = 42;
data= "Now a string";    //o/p : No error

//unknown
let input:unknown = "Hello";
if(typeof input === "string"){
    console.log(input.toUpperCase());
}

//void : used for functions that do not return a value
function logMessage(): void{
    console.log('This function returns nothing');
}

//never : used for functions that never return (e.g. throwing errros or infinite loop)
function throwError(): never{
    throw new Error('Something went wrong');
}

//Union : A variable can hold multiple types
let value: string | number ;
value = 'Hello world';
value = 100;

//Intersection : Combine multiple types
type Employee = {fname:string};
type Manager = {department:string};
type TeamLead = Employee & Manager;

let lead:TeamLead = {fname:"Ankit", department:"Engineering"};

//type alias : It defines custom data types
type ID = string | number;
let userId:ID = "user123";

//enum : defines named constants
enum Role{
    Admin, User, Guest
}
let userRole:Role = Role.Admin;

//literal type : restricts a value into a specific set
let direction: 'up' | 'down';

direction = 'up'; //ok
// direction = 'left'; //Error

//function type : define the type of a function
let add:( x:number, y:number )=>number;
add = (x,y) => x+y;

