'use strict';

//let a = [[1,2], [3, 4]];
//
//let b = a.reduce((accumulator, next) => [...accumulator, ...next]);
//
//console.log(b);

function greeting(greeting = 'Hello', firstname= 'Haibo', lastname = 'Yan') {
    return greeting + ' ' + firstname + ' ' + lastname;
}

console.log(greeting());                          // Hello Peter Munro
console.log(greeting('Good morning'));            // Good morning Peter Munro
console.log(greeting('Goodbye', 'Mr', 'Chips')); 

function calculateTax(price, rate) {
    return price * rate;
}

function getTotalPrice(price, rate = 0.18, taxFunc = calculateTax) {
  return price + taxFunc(price, rate);
}

console.log(getTotalPrice(100));
console.log(getTotalPrice(100, (p, r) => 20));

function search(category, ...otherTags) {
    console.log("Category = " + category);
    
    for (let tag of otherTags) {
        console.log(tag);    
    } 
}

search('headphones', '4.1', 'noise-cancelling', 'bluetooth');

console.log('string'.split(''));

console.log('hello'.split('').reduce((arr, c) => {
    if (arr.includes(c)) {
        return [...arr];
    } else {
        return [...arr, c];
    }
}));