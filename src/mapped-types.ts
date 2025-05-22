function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  name: 'string',
  age: 1,
};

console.log(getProp(user, 'name'));
