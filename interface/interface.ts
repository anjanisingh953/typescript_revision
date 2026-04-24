//Interface is mainly used to give shape to object and to create methods 
interface Info {
    name: string,
    age: number,
    college: string
}

interface Teacher extends Info {
    subject: string
}

var studentObj: Info = {
    name: 'anjani',
    age: 25,
    college: 'VITM'
}


var teacherObj: Teacher = {
    name: 'Sumit',
    age: 50,
    college: 'VITM',
    subject: 'Maths'
}


var managementObj: Info = {
    name: 'Vivek',
    age: 40,
    college: 'VITM',
}


//create interface for methods
interface DiscountCalculator{
        (price:number) : number
}

const applyCode:DiscountCalculator = (p)=> p*0.50;

//interface is used to create index signature  
interface chaiRatings{
    [flavor:string]:number
}

const ratings:chaiRatings = {
    masala:4.2,
    ginger:3.6
}

interface TeaMachine{
    start():void,
    stop():void;
}

const machine:TeaMachine = {
    start(){
        console.log('start')
    },
    stop(){
        console.log('start')
    }
}


//extends interface
interface A {
    a:string
}

interface B {
    b:string
}

interface C extends A,B {
    c:string
}


class TestInterface implements C{
    a:string;
    b:string;
    c:string;
    constructor(a:string,b:string,c:string){
        this.a = a;
        this.b = b;
        this.c = c
    }   
}