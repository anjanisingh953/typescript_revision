"use strict";
// typedPromise means to give a type to a promise function
function complexFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                user_id: 123,
                name: 'anjani',
                email: 'anjanisingh123@gmail.com'
            });
        }, 2000);
    });
}
complexFunction().then((data) => {
    console.log(data);
});
//# sourceMappingURL=typedPromise.js.map