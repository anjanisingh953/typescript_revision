function totalPrice(price:number,quantity:number,message:string){
  console.log(message + price*quantity);
}

totalPrice(100,5,'Total price is ');
totalPrice(100,10,'Total price is ');
totalPrice(200,10,'Total price is ');

//optional params

function optionalParams(fname:string,lname?:string){
    if(lname){
        console.log(`Hello Mr. ${fname} ${lname}`);
    }else{
        console.log(`Hello Mr. ${fname}`);
    }
}

optionalParams('Anil','kumar')
optionalParams('Rocky');


function defaultParams(fname:string,lname:string='singh'){
    if(lname){
        console.log(`Hello Mr. ${fname} ${lname}`);
    }else{
        console.log(`Hello Mr. ${fname} ${lname}`);
    }
}

defaultParams('Abhijeet','kumar')
defaultParams('Ranveer');

//params accept any datatype 
function anyParams(data:any){
    console.log('Now data is ',data)
}
anyParams('Vivek')
anyParams(true)