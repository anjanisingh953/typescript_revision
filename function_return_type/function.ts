function fruits():string{
    return 'Grapes are so sweet';
}

function simple(){
 console.log('function by default return type is void')   
}

function complex(): string | number {
        let data =10;
    if(typeof data == 'string'){
        return 'Data is string type'
    }else{
        return data;
    }
}

function anything():any{
    return 'Return type can be anything'
}

//never return type
function loopFunction():never{
    while(true){
        console.log('loop');
    }
}

function simple1():never{
    throw new Error('Something went wrong...Server Error')
}