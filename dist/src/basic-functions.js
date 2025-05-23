"use strict";
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function applyMath(fnc, values) {
    const result = [];
    for (let i = 0; i < fnc.length; i++) {
        result.push(fnc[i](values[i][0], values[i][1]));
    }
    return result;
}
console.log(applyMath([mul, div], [
    [10, 20],
    [40, 20],
]));
