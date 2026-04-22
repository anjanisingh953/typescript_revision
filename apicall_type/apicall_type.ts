// https://jsonplaceholder.typicode.com/users

type APIType = {
    userId: string,
    name:string,
    username:string,
    id:number,
    title:string,
    completed:boolean
}

async function apiCallHandling():Promise<APIType>{
    const result = await fetch('https://jsonplaceholder.typicode.com/users/5');
    const data = result.json();
    return data;
}

apiCallHandling().then((data:APIType)=>{
    console.log(data)
})