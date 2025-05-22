type StringOrNumber = string | number;

type Person2 = {
  name: string;
  age: 22;
}; // This is also valid but using interface might be more apt for objects

type type1 = StringOrNumber | Person2;
type type2 = StringOrNumber & Person2

function example(nameOrAge: StringOrNumber) {
  console.log(nameOrAge);
}

example('Pranav');
