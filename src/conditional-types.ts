type IsArray<T = []> = T extends any[] ? 'array' : 'not array';

type A = IsArray<string[]>;
type B = IsArray<number>;
type C = IsArray;
