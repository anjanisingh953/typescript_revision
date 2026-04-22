// In typescript, Utility types are built-n types that help to transform or
// manipulate other types in a convenient way.
//It has 9 type : partial, required, readonly, pick, omit, Exclude, Extract, NanNullable, Record

interface newCollegeDataType{
    name: string,
    location: string,
    studentId: number,
    branch?: string,
}

//We use Partial here, it means all property is not mandatory
let newCollegeData1:Partial<newCollegeDataType> = {
    name: 'Anjani',
    location: 'Indore',
    studentId: 123
}

//we use readonly to freeze the datatype, now we can not add additional one
let newCollegeData2:Readonly<newCollegeDataType> = {
    name: 'Anjani',
    location: 'Indore',
    studentId: 123
}

//we use required, it means we have to use all properties even any property is optional
let newCollegeData3:Required<newCollegeDataType> = {
    name: 'Anjani',
    location: 'Indore',
    studentId: 123,
    branch: 'cs'
}

//we pick, so that we can pick the property as per our requirement
let newCollegeData4:Pick<newCollegeDataType,'name'|'location'> = {
    name: 'Anjani',
    location: 'Indore'
}

//we use Omit, to pick the property as per our requirement by deselecting, here we can not use location property   
let newCollegeData5:Omit<newCollegeDataType,'location'> = {
    name: 'Anjani',
    studentId: 123,
}

//we use exclude, It works with union to remove any datatype. It means we can use all expect the pending APIStatus
type APIStatus =  'loading' | 'error' | 'pending' | 'success'  

let APICall:Exclude<APIStatus,'pending'> = 'error'
    APICall = 'success';
    APICall = 'loading';
    // APICall = 'pending';  //It wil give Error


//we use extract, It works with union to select specific datatype. It means we can use only extracted APIStatus
let APICall2:Extract<APIStatus,'pending'|'loading'> = 'loading'
    // APICall2 = 'success';
    APICall2 = 'loading';
    // APICall2 = 'success';  //It will give Error



    
//We NonNullable,Now we can not use nullish datatype values like null, undefinied. 
//NonNullable works like nullish coalescing operator
type RandomType = string | boolean | number | undefined | null | string[]

var randomData:NonNullable<RandomType> = 'Anystring' ;
// var randomData:NonNullable<RandomType> = undefined ; //It will give Error 

//Record convert the type options into object

type userRole = 'admin' | 'user' | 'guest';

var userRoleOption:userRole = 'admin'