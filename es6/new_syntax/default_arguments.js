'use strict';


function add(i1, i2 = 2) {
    // used to be i2 = i2 || 2; problem for this is 0 will be treated as false
    return i1 + i2;
}

console.log(add(1, 3));
console.log(add(1, 0));
console.log(add(1));

function plus (i1, i2) {
    i2 = i2 || 2;
    return i1 + i2;
}

console.log(plus(1, 3));
console.log(plus(1, 0));
console.log(plus(1));