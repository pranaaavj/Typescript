function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: 'Pranav',
  age: 21,
};

console.log(getProperty(user, 'age'));

export { user };
