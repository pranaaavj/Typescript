"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Person1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person1 = new Person1(1234);
console.log(person1.getName());
function getVal(key, val) {
    console.log(key, val);
}
class Car {
    constructor(name) {
        this.name = name;
    }
    returnName() {
        return this.name;
    }
}
exports.Car = Car;
const car = new Car('Honda');
getVal('Hello', 12);
