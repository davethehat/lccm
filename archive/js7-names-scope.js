// Our friend, exit and log...
const exit = process.exit;
const log = console.log;

// We've been giving names to things since we started looking at variables. Now
// is the time to play with names mode deeply, and understand how they behave
// within a more complex program...

// Firstly, what happens when we try to run this:

let a = 12;
let a = 24;

log(a);

exit();

// Exactly. But you can do this:
let b = 12;
log(b);
b = 24;
log(b);

exit();

// How about this


let c = 'here';
let f1 = c => log('In function: ', c);
log('Outside function: ', c);
f1('there');

exit();

// What happened to the outside c inside the function?
// Would you expect the same with the alternative ways
// to express this function:
//
// let f2 = (c) => {
//   log('Inside f2:',c);
// }
//
// let f3 = function(c) {
//   log('Inside f3:',c);
// }
//
// Now take a look at this

let outer = 'xyzzy';
let f4 = function(c) {
  log('Passed to function:', c);
  log('Name from outside: ', outer);
};

f4('abracadabra');

exit();

// And this

let d = 'hello';
log('Outside...', d);

{
  let d = 'goodbye';
  log('Inside...', d);
}

log('Outside again...', d);

exit();

// What's going on here? What are those {} doing?
//
// ...
//
//
// ...
//
//
// ...
//
//
// ...
//
//
// ...
//
//
// ...
//
// Function bodies (either with braces or in function expressions) and braces 
// surrounding statements define *scopes*
//
// ...
//
// How does a scope interact with variable names?
//   - with names defined inside the scope itself?
//   - with names defined outside the scope?
//   - with names introduced into the scope as function arguments?
//   - if a name is defined inside the scope that's the same as one outside?



// Now. Here's a function that given a number, adds two to it

let addTwo = function(n) {
  return n + 2;
};

// Here's a function that _returns_ that function

let addTwoFunction = function() {
  return function(n) {
    return n + 2;
  }
};

// We can of course write this like this
//
//   let addTwoFunction = () => (n) => n + 2
//
// Think about this: try to 'read' it as a sentence: 
//    "addTwoFunction is a ..."
//
// Which do you prefer?


let ff = addTwoFunction();
// ff is a function, which we can call...
log( ff(20) );

// We can call the result of addTwoFunction directly:o
log( addTwoFunction()(99) );

// Make sure you understand this!

// Now this: Here's a rewritten version of the function

let addTwoFunction1 = function() {
  let p = 2;
  return function(n) {
    return n + p;
  }
};

log( addTwoFunction1()(200) );

// What does this tell you about scopes?

// Can you now write a function:
//   - that takes a number as a parameter
//   - and returns a function
//       - that takes a number as a parameter
//       - and returns that number added to the number passed to the outer function
//
// Well, how about it?


