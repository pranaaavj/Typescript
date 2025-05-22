type Constructor<T = {}> = new (...args: any[]) => T;

function Swimmer<T extends Constructor>(Base: T) {
  return class extends Base {
    swim() {
      console.log('Swimming...');
    }
  };
}

function Walker<T extends Constructor>(Base: T) {
  return class extends Base {
    walk() {
      console.log('Walking...');
    }
  };
}

class Base {
  name: string = 'Pranav';
}

class Child extends Swimmer(Walker(Base)) {}

const child = new Child();

child.swim();
child.walk();
console.log(child.name);
