interface User {
  age: number;
  getDetails(): string;
}

class Employee implements User {
  protected name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name} - Age ${this.age}`;
  }
}

class Manager extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    console.log(this.name);
  }
}

const e1 = new Manager('Pranav', 23);

export default User;
