let a = Symbol();
let b = Symbol();

console.log(a == b);

let c = Symbol("Foo");
let d = Symbol("Foo");
console.log(c == d);

console.log(c.toStringTag);

let obj = {a: 1, b: 2};
color = Symbol("color");
obj[color] = "blue";
console.log(obj);
console.log(obj[color]);

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));



pc = color.toPrimitive;
obj[pc] = "I am a nice object";
obj[pc] = obj[pc]