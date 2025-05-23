"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractAnimal {
    walk() {
        console.log('Walking...');
    }
}
class Cat extends AbstractAnimal {
    makeSound() {
        console.log('Meow');
    }
}
class Dog extends AbstractAnimal {
    makeSound() {
        console.log('Bow bow');
    }
}
const cat = new Cat();
cat.makeSound();
cat.walk();
const dog = new Dog();
dog.makeSound();
dog.walk();
