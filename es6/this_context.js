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
console.log(p1);
p1.sayName();
p1.tellAge();

let p2 = new Person("Zachary", 27);
console.log(p2);
p1.tellAge();
p1.sayName();

let sayName = p1.sayName;
sayName();