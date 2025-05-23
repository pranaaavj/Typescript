"use strict";
function Swimmer(Base) {
    return class extends Base {
        swim() {
            console.log('Swimming...');
        }
    };
}
function Walker(Base) {
    return class extends Base {
        walk() {
            console.log('Walking...');
        }
    };
}
class Base {
    constructor() {
        this.name = 'Pranav';
    }
}
class Child extends Swimmer(Walker(Base)) {
}
const child = new Child();
child.swim();
child.walk();
console.log(child.name);
