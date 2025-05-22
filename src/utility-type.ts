interface Todo {
  title: string;
  description: string;
}

const todo1: Partial<Todo> = {
  title: 'Gym',
}; // Makes every property optional

const todo2: Readonly<Todo> = {
  title: 'Gym',
  description: 'Please workout',
}; // Makes every property read only

const todo3: Pick<Todo, 'title'> = {
  title: 'Wash cloths',
}; // Picks only the mentioned properties

const todo4: Omit<Todo, 'title'> = {
  description: 'yo',
}; // Removes the mentioned properties

const todo5: Record<number, Partial<Todo>> = {
  1: { title: 'Gym', description: 'Must go' },
  2: { title: 'Gym' },
}; // Record lets us use the type in an object
