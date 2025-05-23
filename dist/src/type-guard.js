"use strict";
function isString(test) {
    return typeof test === 'string';
}
function input(type) {
    if (isString(type)) {
        return type.length;
    }
}
console.log(input('Pranav'));
