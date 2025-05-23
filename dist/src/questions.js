"use strict";
function calculateFunc(shapes) {
    const arr = [];
    const arr2 = [];
    for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        if (shape.kind === 'circle') {
            arr.push(shape.radius * 2);
        }
        else if (shape.kind === 'square') {
            arr2.push(shape.side * 4);
        }
    }
    return [arr, arr2];
}
const rec = {
    kind: 'circle',
    radius: 20,
};
const circle = {
    kind: 'square',
    side: 30,
};
const [res1, res2] = calculateFunc([rec, circle]);
console.log(res1, res2);
