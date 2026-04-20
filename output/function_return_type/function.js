"use strict";
function fruits() {
    return 'Grapes are so sweet';
}
function simple() {
    console.log('function by default return type is void');
}
function complex() {
    let data = 10;
    if (typeof data == 'string') {
        return 'Data is string type';
    }
    else {
        return data;
    }
}
function anything() {
    return 'Return type can be anything';
}
//never return type
function loopFunction() {
    while (true) {
        console.log('loop');
    }
}
function simple1() {
    throw new Error('Something went wrong...Server Error');
}
//# sourceMappingURL=function.js.map