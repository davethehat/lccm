'use strict';

// Remember this?
let count = 1;

while (count <= 10) {
  console.log('Counting - ' + count);
  count = count + 1;
}


// There's another way to code a loop in JavaScript.
// This is the basic form of the _for_ statement

// for (initial-expression; condition; increment-expression) statement

// The expression, condition and inv=crement expressions can be arbitrarily complex!
// (But really, don't go there...)
// Most commonly, for-loops are used to traverse a range of numbers. The _while_ loop
// above could be written as follows:

for (let count1 = 1; count1 <= 10; count1 = count1 + 1) {
  console.log('Counting with a for loop - ' + count1)
}


// _for_ has a few other forms, we won't worry about these for now...


// ====================

// So, here's a small test. Given what you know about arrays, can you write the
// code to log each element of the following array to the console, in three
// different ways: using a while loop, using a for loop, and using the forEach
// method on the array itself.

let thursday = ['This', 'must', 'be', 'Thursday'];


// while




// for




// forEach



// ====================






