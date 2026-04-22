//Earlier what we do
    // type userData7Type ={
    //     id:number,
    //     marks:number,
    //     mobile:number,
    //     age:number
    // }

//It takes dynamic object keys but first 3 keys are mandatory    
    // type userData7Type ={
    //     id:number,
    //     email:string,
    //     username:string,
    //     [key:string]: string|number
    // }

// make readonly object property and can not add extra object property through objectName.key='anyValue'
// It means we have to define all object properties while creating an object, after object creation we can not add any object property
type userData7Type ={
    id:number,
    email:string,
    username:string,
    readonly [key:string]: string|number
  }


var userData7:userData7Type={
    id:1,
    email:'anjani123@gmail.com',
    username:'anjani123',
    marks:90,
    mobile:95894545455,
    age:25
}

// userData7.city = 'Indore' // It is not possible because we use readonly keyword,