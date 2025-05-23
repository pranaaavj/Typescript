function map<Input, Output>(
  arr: Input[],
  func: (a: Input) => Output
): Output[] {
  return arr.map(func);
}

console.log(map<number, string>([1, 2, 3], (a: number) => String(a)));
