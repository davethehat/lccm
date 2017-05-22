'use strict';

// This assignment uses nodejs's function _require_ to load
// an external module. This module provides a small but useful
// set of assertions we can use to test our code.

const assert = require('assert');

// Check out the documentation for the assert module at
// https://nodejs.org/api/assert.html

// Note too that we assign the result of require to a _const_:
// we're not going to assign anything else to this in our
// module, so it may as well be const. Look out for more uses
// of const as we go on. In general, using const is a good
// habit to get into (why do you think this might be?)

// Others have built more extensive testing frameworks in
// JavaScript, but for now we'll just use these basic facilities
// and ordinary functions to write our unit tests.

// Let's rewrite the test function from the previous example using
// assert rather than if-then-else

function mean() {
  // You will write code here...
}

function meanOfEmptyArrayIsZero() {
  // given
  const input = [];

  // when
  const result = mean(input);

  // then
  assert.equal(result, 0);
}

// Add more test functions here
// ...

function testMean() {
  meanOfEmptyArrayIsZero();
  // Call your test functions here
  // ...

}

testMean();

// Now think of, and code, some more tests. How many tests does
// it make sense to write? What sort of conditions might we
// want to test? What do you want to do in the case that the
// function is passed something that's not an array of numbers?

