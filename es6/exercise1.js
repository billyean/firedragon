'use strict';

// http://exercises.petermunro.org/variables-and-scoping/

// What will happen when this code is executed?
//{
//    console.log(i); // ReferenceError: i is not defined
//    let i = 5;
//}

// What will this code output?
//let invoiceId = 647;
//for (let invoiceId = 0; invoiceId < 5; invoiceId++) {
//}
//console.log(invoiceId); // out 647

//if (true) {
//    function updateId() {
//        id = 20;
//    }
//    let id = 5;
//    updateId();
//    console.log(id); // output 20
//}

//const N_PROC = 4;
//console.log(N_PROC);
////N_PROC = 4;
//console.log(N_PROC);

var callbacks = []
for (var i = 0; i < 5; i++) {
  callbacks.push(function() { 
      const j = i;
      console.log(j); 
  });
}

// test one of the callbacks - it should
// display the number '2'
callbacks[2]();
