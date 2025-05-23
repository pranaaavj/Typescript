interface User {
  name: string;
  age: number;
}

const obj = {} as User;

obj.age = 12;
obj.name = 'Pranav';

export { User };
