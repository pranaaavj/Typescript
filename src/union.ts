type answer = true | false;
type MainAnswer = string | answer;

type Users = {
  name: string;
  age: number;
};

type Employee2 = {
  name: string;
  manager: string;
};

type People = Users & Employee2;

const obj3: People = {
  name: 'Pranav',
  age: 12,
  manager: 'Myself',
};
