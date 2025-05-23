const name: any = 'Pranav';
const name2: unknown = 'Hari';
const name3: string = 'YoMama';
const name4: number = 1;
const name5: boolean = false;
const name6: symbol = Symbol('Hello');
const name7: bigint = 1012321312n;

if (name2 === 'string') name2.toUpperCase();

// Never type example
function getError(message: string): never {
  throw new Error();
}

type User = {
  name: string;
  age: number;
};

type Person = User & {
  salary: number;
};

const user: Person = {
  name: 'Pranav',
  age: 21,
  salary: 8,
};

let list: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
let list3: Array<number | string> = [7, 'Pranav', 8];
let list4: [number, string] = [12, 'Pranav'];

export default name;
