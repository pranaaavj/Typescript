abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log('Moving...');
    this.makeSound();
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

const cat1 = new Cat();
const dog1 = new Dog();

dog1.move();
