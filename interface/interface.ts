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
