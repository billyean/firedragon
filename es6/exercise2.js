'use strict';

//var car = {
//    color: 'Blue',
//    wheels: ['ns-front', 'os-front', 'ns-rear', 'os-rear'],
//    wheelOnColor: function(wheel) {
//        return "The " + wheel + " wheel on a " + this.color + " car";
//    },
//    getWheelStrings: function() {
//        console.log(this);
////        return this.wheels.map((wheel) => {
////            console.log(this);
////            return "The " + wheel + " wheel on a " + this.color + " car"    
////        });
//        return this.wheels.map(function(wheel) {
////            console.log(this);
//            return "The " + wheel + " wheel on a " + this.color + " car";
//        });
//    }
//}
//
//console.log(car.getWheelStrings());

var add = (a, b) => a + b;
console.log(add(1,2));

var square = x => x * x;
console.log(square(10));

var pi = () => Math.PI;
console.log(pi());

var res = (a, b, c) => { 
    return {
        first: a,
        second: b,
        third:c
    };
};

console.log(res(1,2,3));

let array = [1, 2, 3, 4, 5, 6];
let squares = array.map(x => x * x);
console.log(squares);