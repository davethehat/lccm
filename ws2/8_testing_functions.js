'use strict';

// Here's a function that calculates the mean of an array of numbers:

function originalMean(a) {
  let sum = 0;
  a.forEach(n => sum = sum + n);
  return sum/a.length;
}

console.log(mean([1,2,6]));

// This is all well and good, but are we _sure_ it's correct?
// What happens if we pass it an empty array?
// What happens if we pass it something that isn't an array?

// To guide or design and development, to help us remember to
// consider all these odd cases, and to provide confidence that
// as we change things our code still works, we write Unit Tests.

// In fact, we do more than write Unit Tests to write code that
// we've already written. We write the tests first, to demonstrate
// to ourselves that we understand what we expect our code to do.

// This is a fundamental discipline in modern development.

// Let's start again. We want a function mean() that returns the arithmetic
// mean of its array argument. What do you want to happen if it's presented an
// empty array?

// A test for this might look something like this:

function meanOfEmptyArrayIsZero() {
  // given
  const input = [];

  // when
  const result = mean(input);

  // then
  if (result === 0) {
    console.log('OK');
  } else {
    console.log('FAIL - expected 0, got ' + result);
  }
}

function mean() {
  // You will write code here...
}

function testMean() {
  meanOfEmptyArrayIsZero();
}


testMean();

// Logging to console for test success/failure is a bit clunky.
// Let's look at another way of doing this, and at the same time
// start to look at ways in nodejs of incorporating other
// code modules...