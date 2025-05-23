interface Shape {
  kind: 'circle' | 'square';
  radius?: number;
  sideLength?: number;
}

function findArea(shape: Shape): number {
  if (shape.kind == 'circle') {
    return shape.radius! * 2 * 3.14;
  } else {
    return shape.sideLength! * 4;
  }
}

export { Shape };
