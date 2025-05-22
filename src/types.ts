const name: any = 'Pranav';
const name2: unknown = 'Hari';
const name3: string = 'YoMama';
const name4: number = 1;
const name5: boolean = false;
const name6: symbol = Symbol('Hello');
const name7: bigint = 1012321312n;

// Never type example
function getError(message: string): never {
  throw new Error();
}

getError('Hello');

export default name;
