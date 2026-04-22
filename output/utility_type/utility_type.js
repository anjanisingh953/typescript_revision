"use strict";
// In typescript, Utility types are built-n types that help to transform or
// manipulate other types in a convenient way.
//It has 9 type : partial, required, readonly, pick, omit, Exclude, Extract, NanNullable, Record
//We use Partial here, it means all property is not mandatory
let newCollegeData1 = {
    name: 'Anjani',
    location: 'Indore',
    studentId: 123
};
//we use readonly to freeze the datatype, now we can not add additional one
let newCollegeData2 = {
    name: 'Anjani',
    location: 'Indore',
    studentId: 123
};
//we use required, it means we have to use all properties even any property is optional
let newCollegeData3 = {
    name: 'Anjani',
    location: 'Indore',
    studentId: 123,
    branch: 'cs'
};
//we pick, so that we can pick the property as per our requirement
let newCollegeData4 = {
    name: 'Anjani',
    location: 'Indore'
};
//we use Omit, to pick the property as per our requirement by deselecting, here we can not use location property   
let newCollegeData5 = {
    name: 'Anjani',
    studentId: 123,
};
let APICall = 'error';
APICall = 'success';
APICall = 'loading';
// APICall = 'pending';  //It wil give Error
//we use extract, It works with union to select specific datatype. It means we can use only extracted APIStatus
let APICall2 = 'loading';
// APICall2 = 'success';
APICall2 = 'loading';
var randomData = 'Anystring';
var userRoleOption = 'admin';
//# sourceMappingURL=utility_type.js.map