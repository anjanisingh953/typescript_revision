
// type personTypeA = {name:string};
// type personTypeB = {age:number};
// type personTypeC = personTypeA & personTypeB;


interface personTypeA {name:string};
interface personTypeB {age:number};
type personTypeC = personTypeA & personTypeB;


var PersonDataA:personTypeA = { name: 'Anjani' };
var PersonDataB:personTypeB = { age: 25 };
var PersonDataC:personTypeC = { name: 'Amit', age: 24 } 
