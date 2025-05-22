abstract class Animal {
  constructor(protected name: string) {}

  abstract walk(): void;
  abstract makeSound(): void;

  sayMyName() {
    console.log(`Hey ! My name is ${this.name}`);
  }
}

class Cat extends Animal {
  walk() {
    console.log('Walking...');
  }
  makeSound() {
    console.log('Meow');
  }
}

const cat = new Cat('Pussy');

cat.sayMyName();

export { Animal };
