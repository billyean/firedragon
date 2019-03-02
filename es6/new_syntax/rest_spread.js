'use strict';

function add() {
    let sum = Array.prototype.reduce.call(arguments, (p, v) => p + v);
    return sum;
}

console.log(add(1, 2, 3));

function betterAdd(...values) {
    return values.reduce((p, v) => p + v);
}

console.log(betterAdd(5, 6, 7));

function say(greeting, farewell, ...people) {
    people.forEach(p => console.log(`${p} says ${greeting}, and ${farewell}`));
}

say("Good morning", "bye", "Zachary", "Tristan", "Haibo");

// Spread with ...
let b = ["Hello", "Good Bye"]
say(...b, "Zachary", "Tristan", "Haibo");


