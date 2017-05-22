// Our friend, exit and log...
const exit = process.exit;
const log = console.log;

// Up to now we've played with fragments of code to explore and discover things about the
// the raw materials available to us when programming in JavaScript.

// Now is the time to branch out and look at organizing our code. In general you need more
// than a handful of objects, functions and variables to build software of any significant
// use.


const stringUtil = require('./lib/stringUtil');
const capitalize = stringUtil.capitalize;

// What does capitalize do?


// ---- Try it out here ----



exit();

// Take a look at lib/stringUtil.js
// What's going on that lets us use 'capitalize' here?
// What kind of thing is 'capitalize'?
// Why didn't we type
//
//     let capitalize = stringUtil.capitalize();
//
// ?
//
// Do you remember "const"?
//
// Now try out the function titleCase exported from stringUtil


// ---- Try it out here ----



exit();


// stringUtil.js is a very simple example of a *module*, in this case one which contains utility functions
// which we can re-use. In a moment you're going to add to the module, but first, let's think about
// what you might expect when someone gives you a module of functions to reuse. Make a list...
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
//
// ...
//
// Ideally, you'll want to know how to call it: what parameters it expects, what it will give you
// back. Additionally, you'll expect that whoever has written the module has made sure that it performs
// as advertised: it would be a surprise if 'capitalize' introduced strange characters into its return
// value, or if it crashed when you gave it a number.
//
// We can help with both of these by providing *tests*. Take a look at 
// 
//  ./test/testStringUtil.js
//
// which is a very simple set of tests for this very simple module. Read the code, agree about what makes sense,
// talk about anything that doesn't.
//
// Now try changing one of the lines in the tests, for example
//
//   assert.equal(stringUtil.capitalize('hello'), 'hELLO', 'capitalizes OK');
//
// and run the test again. 
//
// Put the line back to its original form.
//
// Now you're going to add deCapitalize function to the stringUtil.js module. To do this, you're going to start
// by writing a test with a single assertion in testStringUtil.js Where are you going to put this test?
//
// Once you have written the test *and before you add any more code* try running the test
//
// Now on the basis of the existing code for capitalize, write the deCapitalize function and export it from
// the stringUtil module
//
















