class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  callName(): void {
    console.log('Hello ' + this.name);
  }
}

class Employee extends Person {
  constructor(name: string) {
    super(name);
  }

  callName(): void {
    console.log(this.name);
  }
}

const p1 = new Employee('Pranav');

console.log(p1.callName());
