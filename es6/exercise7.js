let state = { isVisible: true }

state = Object.assign({ exportMode: false }, state);
console.log(state);


let state1 = { isVisible: true, b: {a: 5} }

function deepCopy(object) {
    var cloned = {};
    for (let entry of Object.entries(object)) {
        [name, value] = [...entry];
        console.log(name);
        let clonedValue = deepCopy(value);
        console.log(clonedValue);
        cloned = Object.assign(cloned, {name: clonedValue});
        console.log(cloned);
    }
    return cloned;
}

newState = deepCopy(state1);
console.log(newState);

function initializeTestFramework(options) {
    return Object.assign({a1: 'Hello'}, options);
}

console.log(initializeTestFramework({
  testDirectory: './tests',
  pauseBetweenTests: true,
  runConcurrently: false,
}));

console.log(NaN === NaN);
console.log(-0 === +0);
console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, +0));
