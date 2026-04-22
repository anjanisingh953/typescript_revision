"use strict";
// https://jsonplaceholder.typicode.com/users
async function apiCallHandling() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/5');
    const data = result.json();
    return data;
}
apiCallHandling().then((data) => {
    console.log(data);
});
//# sourceMappingURL=apicall_type.js.map