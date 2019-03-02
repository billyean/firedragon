// Before ES6
let fs = require('fs');

console.log("Describe sync all, this is bad ");
console.log("--------------------------------------------------------------------------------");
let file = fs.readFileSync('new_syntax/destructing.js'); // Blocking call
console.log(file.toString());


console.log();

// async call
console.log("Describe async all");
console.log("--------------------------------------------------------------------------------");
fs.readFile('new_syntax/destructing.js', (err, data) => console.log(data.toString()));
console.log();

// identation call
console.log("Describe async all");
console.log("--------------------------------------------------------------------------------");
fs.readFile('new_syntax/destructing.js', (err, data) => {
    console.log(data.toString());
    fs.readFile('new_syntax/module.js', (err, data) => {
        console.log(data.toString());
    });
});
console.log();

// promises
let  myPromise = new Promise((resolve, reject) => {

});