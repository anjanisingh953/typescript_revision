enum WhoType{
    student = 'student',
    teacher = 'teacher',
    labStaff = 'labStaff' 
}

var who:WhoType = WhoType.teacher;
var who:WhoType = WhoType.labStaff;

console.log(who)  // o/p: labStaff

enum Roles{
    admin,
    user,
    manager,
    tester,
    developer
}

var userRoles:Roles = Roles.admin;
console.log(userRoles);    //o/p : 0

var userRoles:Roles = Roles.tester;
console.log(userRoles);    //o/p : 3