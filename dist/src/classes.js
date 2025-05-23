"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    callName() {
        console.log('Hello ' + this.name);
    }
}
class Employee extends Person {
    constructor(name) {
        super(name);
    }
    callName() {
        console.log(this.name);
    }
}
const p1 = new Employee('Pranav');
console.log(p1.callName());
