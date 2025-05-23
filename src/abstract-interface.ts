interface Animal {
  makeSound(): void;
}

abstract class AbstractAnimal implements Animal {
  abstract makeSound(): void;

  walk() {
    console.log('Walking...');
  }
}

class Cat extends AbstractAnimal {
  makeSound(): void {
    console.log('Meow');
  }
}

class Dog extends AbstractAnimal {
  makeSound(): void {
    console.log('Bow bow');
  }
}

const cat = new Cat();
cat.makeSound();
cat.walk();

const dog = new Dog();
dog.makeSound();
dog.walk();

export { Animal };
