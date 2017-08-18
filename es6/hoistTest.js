var i = 'a string';

function myFunc() {
    // var i; because hosting happened.
    console.log(i);
    // Hoisting happened
    for (var i = 0; i < 2; i++) {
        console.log(i);
    }
}

myFunc();