"use strict";
function getProp(obj, key) {
    return obj[key];
}
const user = {
    name: 'string',
    age: 1,
};
console.log(getProp(user, 'name'));
