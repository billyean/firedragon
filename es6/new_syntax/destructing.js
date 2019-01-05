'use strict';

let arr = [1, 2, 3, 4];

let a = arr[0], b=arr[1], c=arr[2], d = arr[3];

let [a1, b1, c1, d1] = arr;

console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
console.log(`a1 = ${a1}, b1 = ${b1}, c1 = ${c1}, d1 = ${d1}`);

[a, b] = [b, a];

console.log(`a = ${a}, b = ${b}`);

[c, d, a, b] = arr;
console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);

let p1 = {
    name: 'Tristan',
    age: 0,
    sex: 'M'
};

let {name: tname, sex: tsex, age: tage} = p1;
console.log(tname, tage, tsex);



