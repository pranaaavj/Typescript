function sayMyName<T = number>(name: T): T {
  return name;
}

console.log(sayMyName<string>('123'));

interface User<T, U> {
  name: T;
  location: { place: T; pincode: U };
}

const user: User<string, number> = {
  name: 'Pranav',
  location: {
    pincode: 12,
    place: 'Ernakulam',
  },
};

function add<T extends number>(num1: T, num2: T): T {
  return (num1 + num2) as T;
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
  rooms: number
}



export { User };
