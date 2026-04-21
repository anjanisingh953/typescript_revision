//Here we learn, how to create class structure using interface
//To use interface in class we use implements keyword 

interface CollegeDataType{
    name:string;
    displayTeachersName():void;
    getStudentList():string[];
}

class CollegeData implements CollegeDataType{
    name: string;
    constructor(collegename:string){
        this.name = collegename;
    }

    displayTeachersName(): void {
        console.log('Teachers >>> '+'Vedika sharma', 'Vivek Sinha', 'Arpit Gokhle')
    }

    getStudentList(): string[] {
        return [ 'anjani', 'mohit', 'vikas' ];
    }
}


var clgData = new CollegeData('IIT Bombay');

clgData.displayTeachersName();
console.log('Student List >>>>>>>> ',clgData.getStudentList());