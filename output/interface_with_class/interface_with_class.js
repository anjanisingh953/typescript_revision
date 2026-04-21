"use strict";
//Here we learn, how to create class structure using interface
//To use interface in class we use implements keyword 
class CollegeData {
    name;
    constructor(collegename) {
        this.name = collegename;
    }
    displayTeachersName() {
        console.log('Teachers >>> ' + 'Vedika sharma', 'Vivek Sinha', 'Arpit Gokhle');
    }
    getStudentList() {
        return ['anjani', 'mohit', 'vikas'];
    }
}
var clgData = new CollegeData('IIT Bombay');
clgData.displayTeachersName();
console.log('Student List >>>>>>>> ', clgData.getStudentList());
//# sourceMappingURL=interface_with_class.js.map