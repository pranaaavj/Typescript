type User = {
  name: string;
  age: 21;
};

type MyPartial<T> = {
  [K in keyof T]: T[K];
};

export { User };
