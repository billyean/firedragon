'use strict';

var callbacks = []
for (let i = 0; i < 5; i++) {
    callbacks.push(() => {
        const j = i;
        console.log(j);
    });
}

// test one of the callbacks - it should
// display the number '2'
callbacks[2]();

// argument
let plus = (a, b) => a + b;

console.log(plus(1, 4));

let numbers = [3,4,5,6];

let evens = numbers.map(x => x % 2 == 0);

console.log(evens);