type Name = 'Pranav' | 'Mithra';

type User = {
  [key in Name]: string;
};

const user: User = {
  Mithra: 'name',
  Pranav: 'name',
};

export { User };
