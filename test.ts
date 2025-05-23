class Base {
  run() {
    console.log('Running...');
  }
}

type Constructor<T = {}> = new (...args: any[]) => T;

function CreateSwim<T extends Constructor>(Class: T) {
  return class extends Class {
    swim() {
      console.log('Swimming...');
    }
  };
}

function CreateWalk<T extends Constructor>(Class: T) {
  return class extends Class {
    walk() {
      console.log('Walking...');
    }
  };
}

const Dog = CreateSwim(CreateWalk(Base));

const dog1 = new Dog();

dog1.swim();
dog1.run();
dog1.walk();

export { Base };
