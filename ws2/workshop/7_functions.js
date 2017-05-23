'use strict';

// So far we've been concatenating expressions and statements.
// A key abstraction in programming is the ability to compose
// statements into blocks of code that can (if need be) be named,
// and which can be invoked wherever they're needed.
//
// These blocks of code are called _functions_ (and betray their
// roots in mathematics this way). You'll sometimes also hear the
// word _procedure_ -- strictly speaking, functions (like their
// mathematical conceptual ancestors) evaluate to a value, whereas
// procedures just group actions. There are some programming languages
// that recognise this distinction, but JavaScript isn't one of them,
// so we can continue using the word 'function' with a moderately
// clear conscience.

// You remember creating functions like this:
//    x => x *+ 2
//
// and maybe like this
//    beatles.whatDoIPlay = function(name) { return  this[name].instrument }
//
// These are both function _expressions_;
//

// You can (remember this?) assign a function expression to a variable or constant
const square1 = x => x * x;
console.log(square1(5));

// ... which _declares_ a constant and assigns a function (created via a function expression) to it.

// You can also _define_ functions, like this:
function square2(n) {
  return n * n;
}
console.log(square2(6));

// Given that you can also do this:
const square3 = (n) => {
  return n * n;
};
console.log(square3(7));

// And this
const square4 = function(n) {
  return n * n;
};
console.log(square4(7));

// ... what difference does it make?

// Now write a function that returns the cube of a number.
// Use console.log to show the result for a couple of inputs:



// Now write a function that takes two arguments, n and p,
// and returns n raised to the power p (i.e. n * n * ...
// with as many n as p). Use one of the loop statements
// to do this.



// Now write a function that returns the cube of a number, but which
// uses one of the square functions defined above to help in its
// calculations




// These are simple functions, but even here you can see you have a bit
// of thinking to do about how they work. What's more you might not
// be entirely sure just by looking at the answer that your code is
// correct. What can we do about that...?














