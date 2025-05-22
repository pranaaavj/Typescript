class Person1<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }

  getName(): T {
    return this.name;
  }
}

const person1 = new Person1(1234);

console.log(person1.getName());

function getVal<K, V>(key: K, val: V) {
  console.log(key, val);
}

class Car<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }

  returnName(): T | undefined {
    return this.name;
  }
}

const car = new Car('Honda');

interface House {
  rooms: number;
}

getVal('Hello', 12);

export { Car };
