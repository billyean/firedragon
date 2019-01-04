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