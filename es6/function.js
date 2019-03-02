"use strict";

// Function with map
let numbers = [1, 2, 3, 4];

// map with function
let double = numbers.map(i => i * 2);

console.log(double);

function times(i) {
    return i * 3;
}

let triple = numbers.map(times);

console.log(triple);

let  d = function(i){   return i * 4;   }
let quadruple = numbers.map(d);

console.log(quadruple);

// foreach use first argument as collection element
numbers.forEach((i) => console.log(i * 5));

// foreach can accept index as second argument
numbers.forEach((n, i) => console.log("[" + i + "]= " + (n * 6)));

let  x = (i) => i * 7
let sevens = numbers.map(x);
console.log(sevens);

// Function with filter
// get even numbers
let all = [4, 6, 5, 7, 10, 11, 0, 7, 10, 12];
let even = all.filter((n) => n % 2 == 0);
console.log("even numbers are " + even);

// get even position numbers
let evenIndex = all.filter((n, i) => i % 2 == 0);
console.log("even position numbers are " + evenIndex);

let sum = all.reduce((p,c) => p + c);
console.log("sum of " + all + " is " + sum);

let oddPosSum = all.reduce((p,c,i) => p + ((i % 2 == 0) ? 0 : c));
console.log("sum of " + all + "'s odd position numbers is " + oddPosSum);

let addBase = all.reduce((p,c) => p + c, 10);
console.log("sum of " + all + " plus 10 is " + addBase);

