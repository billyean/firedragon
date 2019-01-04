"use strict";


function Person(name, age) {
    /**
     * behind the scenes
     * this = {}
     * setup with this.name = name, this.age = age
     */
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log("Hello my name is " + this.name);
    }

    /**
     * call with new , it will return this.
     */
}

Person.prototype.tellAge = function() {
    console.log("Age is " + this.age);
}

let p1 = new Person("Tristan", 24);
let sayName = p1.sayName;


// call bind with object will assign this
console.log("Example for call");
console.log("==================================================");
sayName.call(p1);
let p2 = new Person("Zachary", 27);
sayName.call(p2);
let ruby = {"name": "Ruby"};
sayName.call(ruby);

// apply with multiple objects
console.log("Example for apply");
console.log("==================================================");
sayName.apply(p1, []);

// bind will generate a new function
console.log("Example for bind");
console.log("==================================================");
let sayNameP1 = sayName.bind(p1);
sayNameP1();
let sayNameP2 = sayName.bind(p2);
sayNameP2();
