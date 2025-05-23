"use strict";
class Animal {
    move() {
        console.log('Moving...');
        this.makeSound();
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('Meow');
    }
}
class Dog extends Animal {
    makeSound() {
        console.log('Bark');
    }
}
const cat1 = new Cat();
const dog1 = new Dog();
dog1.move();
