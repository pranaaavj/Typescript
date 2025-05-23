"use strict";
class Student {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
const student = new Student('Hari');
student.name = 'pranav';
console.log(student.name);
