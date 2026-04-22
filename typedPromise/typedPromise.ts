// typedPromise means to give a type to a promise function

// //It will return string type promise 
// function complexFunction():Promise<string>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//                 resolve("Everything is OK")
//         }, 2000);
//     })
// }

// complexFunction().then((data:string)=>{
//         console.log(data)
// })


// //It will return object type promise 
// type resultType = {
//     user_id: number,
//     name: string,
//     email: string
// }

// function complexFunction(): Promise<resultType> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 user_id: 123,
//                 name: 'anjani',
//                 email: 'anjanisingh123@gmail.com'
//             })
//         }, 2000);
//     })
// }

// complexFunction().then((data: resultType) => {
//     console.log(data)
// })



//It will return object type promise 
interface resultType{
    user_id: number,
    name: string,
    email: string
}

function complexFunction(): Promise<resultType> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                user_id: 123,
                name: 'anjani',
                email: 'anjanisingh123@gmail.com'
            })
        }, 2000);
    })
}

complexFunction().then((data: resultType) => {
    console.log(data)
})


