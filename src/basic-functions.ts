function mul(a: number, b: number) {
  return a * b;
}

function div(a: number, b: number) {
  return a / b;
}

function applyMath(
  fnc: ((a: number, b: number) => number)[],
  values: [number, number][]
): number[] {
  const result: number[] = [];

  for (let i = 0; i < fnc.length; i++) {
    result.push(fnc[i](values[i][0], values[i][1]));
  }

  return result;
}

console.log(
  applyMath(
    [mul, div],
    [
      [10, 20],
      [40, 20],
    ]
  )
);
