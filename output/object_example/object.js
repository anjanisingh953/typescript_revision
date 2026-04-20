"use strict";
// var userData:{
//     fname:string,
//     age:number,
//     company:string | undefined
// }={
//     fname:'Anjani Singh',
//     age:30,
//     company:undefined
// }
// //other way
// var userData:{
//     [key:string]:string|number|undefined
// }={
//     fname:'Anjani Singh',
//     age:30,
//     company:undefined
// }
//other way
var userData = {
    fname: 'Anjani Singh',
    age: 30,
    company: undefined,
    address: {
        houseNo: 'house no 30',
        sector: '70A',
        city: 'Noida'
    }
};
userData.fname = 'gautam';
userData.company = 'Zoho';
console.log(userData);
//# sourceMappingURL=object.js.map