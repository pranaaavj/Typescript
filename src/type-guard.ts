function isString(test: unknown): test is string {
  return typeof test === 'string';
}

function input(type: unknown) {
  if (isString(type)) {
    return type.length;
  }
}

console.log(input('Pranav'));
