function sum(num1: number, num2: number): number;
function sum(num1: string, num2: string): string;

function sum(num1: any, num2: any): any {
  return num1 + num2;
}

console.log(sum(1, 2));

let name = 10;

export { name };
