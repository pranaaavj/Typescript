"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
function getProperty(obj, key) {
    return obj[key];
}
const user = {
    name: 'Pranav',
    age: 21,
};
exports.user = user;
console.log(getProperty(user, 'age'));
