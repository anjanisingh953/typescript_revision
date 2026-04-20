"use strict";
var WhoType;
(function (WhoType) {
    WhoType["student"] = "student";
    WhoType["teacher"] = "teacher";
    WhoType["labStaff"] = "labStaff";
})(WhoType || (WhoType = {}));
var who = WhoType.teacher;
var who = WhoType.labStaff;
console.log(who); // o/p: labStaff
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["user"] = 1] = "user";
    Roles[Roles["manager"] = 2] = "manager";
    Roles[Roles["tester"] = 3] = "tester";
    Roles[Roles["developer"] = 4] = "developer";
})(Roles || (Roles = {}));
var userRoles = Roles.admin;
console.log(userRoles); //o/p : 0
var userRoles = Roles.tester;
console.log(userRoles); //o/p : 3
//# sourceMappingURL=enum.js.map