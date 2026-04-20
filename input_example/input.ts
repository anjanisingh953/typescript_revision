function getInfo() {
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const username: string = usernameInput.value;
    console.log('username', username)

    const fnameInput = document.getElementById('fname') as HTMLInputElement;
    const fname: string = fnameInput.value;
    console.log('fname', fname)

    const ageInput = document.getElementById('age') as HTMLInputElement;
    const age: string = ageInput.value;
    console.log('age', age)
}