"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name} - Age ${this.age}`;
    }
}
class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        console.log(this.name);
    }
}
const e1 = new Manager('Pranav', 23);
