"use strict";
// underscore (_) indicates private or internal property. underscore (_) with variable name is
// only a developer convention (It means plz don't access this variable from outside the class).
// Still that variable can be access from outside the class. 
//getter() method always return something
//setter() method always take a params
//we call getter and setter() methods, like a variable not a function also assign value like a variable not params
class EmpInfo {
    _name = 'Anjani';
    _email = 'anjani123';
    get name() {
        return `Mr. ${this._name}`;
    }
    set email(val) {
        this._email = val + '@gmail.com';
    }
    get email() {
        return this._email;
    }
}
var emp = new EmpInfo();
console.log(emp.name);
emp.email = "vivek";
console.log(emp.email);
//# sourceMappingURL=getter_setter_with_class.js.map