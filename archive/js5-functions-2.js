// This is just a bit of housekeeping that lets us pace this file nicely...
const exit = process.exit;

// So, welcome to WebStorm...
// Before long we'll be doing more structured work in the development environment, and we'll
// talk about modules, classes, tests and all sorts of other good things. For now let's play
// in the WebStorm IDE for a while.
// ---------------------------------
// This is the first example you've seen of a module. A module can have any number of
// statements, and it's good practice (though not actually required in most cases) to
// separate them with semicolons. Modules live in text files on your system.
// ---------------------------------
// Run this by opening a terminal window, cd to the project directory, and type
//
// $> node js5-functions-2.js
//
// ---------------------------------
// By the way, what do you think '//' does?


// You've seen this before...
let a = [10, 20, 30, 40];
a.map(x => x * x);

// Now you're not working in a REPL, you'll need to display the results of your evaluations.
// JavaScript doesn't have a standard output library in the way that some other languages do.
// If you're running in nodejs or in a browser, you can use console.log() to see what's happening.
// Comment out the exit and see what happens..


//exit();

console.log(
  a.map(x => x * x)
);

//exit();

// Remember that you can store a function in a variable, and then use that variable to call it.
// Like this:

let square = x => x * x;

console.log( square(3) );


// Here are a couple of things to do with arrays. You might want to try these out in the REPL
// to get the hang of them

console.log( a.slice(1) );

console.log( a.slice(3) );

//exit();

// What does slice do?
// What does it do to a single-element array?
// What does it do to an empty array?
// Try these here or in the REPL

console.log( [100].slice(1) );
console.log( [].slice(1) );

//exit();

// We'll use ordinary array access and slice to write a couple of
// function expressions that return the first and all-but-first of
// an array, and use these to develop longer functions...

let first = array => array[0];
let rest  = array => array.slice(1);

// With our original array above, what will be the result of

console.log( 'The first of a:', first(a) );
console.log( 'The rest of a:',  rest(a) );

// Note that you can ask console to log any number of things, which
// it will conveniently display separately, with spaces between...
// just as long as you remember to put commas between the things you
// want to log

// while we're here, take a look at what we did at the top of this
// file. I'm getting tired of typing 'console.log( ... )', Let's
// shorten it to log( ... )

// --- your solution here ---

// ---------------------------
// (EXAMPLE SOLUTION)
const log = console.log;
// ---------------------------

log( 'The first of a:', first(a) );
log( 'The rest of a:',  rest(a) );


exit();

// So now we have a couple of functions. Using them can you
// log just the second element of our array a?

log( 'replace me with your answer' );


// ---------------------------
// (EXAMPLE SOLUTION)
//log( first(rest(a)) );


exit();

// Now turn this into a function, 'second'

// let second = 'Your code here...';

// ---------------------------
// (EXAMPLE SOLUTION)
// let second = array => first(rest(array));
// log( second(a) );


// So we've used 'first' and 'rest' together to create a new function
// called 'second'. We've one more basic function to add to the mix, and
// that is to detect whether an array is empty. We saw earlier that arrays have a
// property 'length' that gives the count of elements in the array, so if we
// wanted to write a function empty(array) that returned true if the array has
// no elements, you could simply use that:

// (EXAMPLE SOLUTION)
let easyIsEmpty = array => array.length === 0;

// Let's see if we can find a different way. Let's stipulate that every position
// in an array has a value. Then you'd expect for an array that's not empty,
// first(array) would give us something back.

// What happens if you ask for the first of an empty array?
// Is this just the same as asking for an element, past the end of the array
// when that array happens to have no elements?
// Try it in a REPL if you need a reminder.

let funkyIsEmpty = array => first(array) === undefined;



// Now some more things to do with arrays, in the course of which we'll see a bit
// more of the power of JavaScript. Let's see if - eventually! - we can write a
// function that gives us the length of that array, but with two conditions:
// (1) we're not allowed to say simply a.length (which is, of course the way to do it IRL), and
// (2) we have to use the functions we've defined before: first, rest, and isEmpty.
//
// See if you can thing of a way of describing - in words, a way to express
// the length of an array in terms of parts of the array...
//
//
//
//
//
//
//
// wait for it ...
//
//
//
//
//
//
//
//
// wait for it ...
//
//
//
//
//
//
//
//
// suspense killing you yet?
//
//
//
//
//
//
// OK, so we can think of the length of an array with no elements as 0,
// and the length of an array with > 0 elements as 1 + the length of
// an array with all but the first element of the array (i.e. the rest
// of the array)
//
// Do you notice something about this description?
//
//
// We're describing 'length', but using 'length' in its own description!
//
//
// If we're going to turn this into code, we clearly need an expression
// that will evaluate to one of two things, depending on whether a third
// thing is true or false. Luckily JavaScript (like many other languages)
// provides such a thing:
//
//     aCondition ? ifTrue : ifFalse

// ???? Play with this in REPL?
//
// Note that this is an _expression_ that _evaluates_ to the ifTrue value
// if aCondition is true, and the ifFalse value if not. You can try this
// in the REPL, for example:
//
// > 1 === 1 ? 'Maths is not broken' : 'Something is very wrong'
//
//
// So we need something like
//
//   <is the array empty> ? 0 : 1 + <the length of the rest of the array>
//
// The expression that evaluates to 0 in the other alternative is (clearly)
// simply the number 0. This gives you the first alternative
//
// If you had a function named 'length' already, how would you call it
// to get the length of an array without its first element? Then add 1.
// That gives you the second alternative in the ?: expression,
//
// What's expression can you write to determine whether an array has a
// value in its first element? Shall we make this a function?
//

let isEmpty = array => array[0] === undefined;

// ---------------------------
// (EXAMPLE SOLUTION)
let length = array => isEmpty(array)? 0 : 1 + length(rest(array));

log( length(a) );


let contains1 = (array, element) => isEmpty(array)
  ? false
  : first(array) === element ? true : contains1(rest(array), element)

// nested ternary? hmmmmmmmmmm Would that even be considered...
// pre-introduce ternary expression


// Now, can you use the same approach to write a function 'contains' that
// returns true if an array contains a given element? That is, as follows:
//
// log( 'Should be true',  contains([1,2,3], 2) );
// log( 'Should be false', contains(['fish', 'chips', 'peas'], 'sausage') );
//
// You'll need to give this function _two_ things to work with. To do this,
// put the names of both things in '()', with a comma between. In fact, you
// can give a function any number of arguments in this way, including none: just
// use empty parentheses: '()', for example:

let twoAsAFunction = () => 2;
log( twoAsAFunction() );


// let contains = (array, item) => 'Your code here...';

// ---------------------------
// (EXAMPLE SOLUTION)
let contains = (array, item) => isEmpty(array) ? false : first(array) === item ? true : contains(rest(array), item);


log( 'Should be true',  contains([1,2,3], 2) );
log( 'Should be false', contains(['fish', 'chips', 'peas'], 'sausage') );

//
// Remember that we can very simply change the contents of arrays
// by writing to their slots using numbers as subscripts.
// JavaScript will let you keep doing this as long as you have
// the memory in your system to hold all those numbers... But we're
// going to do something different. I want a function that takes
// _two_ arguments and gives me a new array, in which the first item
// of the new array is the first argument, and the rest of the array is
// made up of the values of the second argument. In other words:
//
// let firstElement = first(a);
// let theRest = rest(a);
// let newArray = prepend(firstElement, theRest);
//
// After this, a and newArray have the same elements, in the
// same order (but they are of course different arrays - think
// of them as two separate baskets which just happen to contain
// the same items)
//
// The first problem to solve here is how to join two arrays.
// The simplest way to do this is to use the builtin concat
// method on array:

log( ['a'].concat(['b','c','d']) );

let prepend = (item, array) => [item].concat(array);

// Now see if you can use isEmpty, first, rest and prepend to _remove an item
// from an array. Talk about it and sketch for a few minutes, then we'll see
// what we have...
//
// First, what do you think about removing an item from an empty array?
//
// Right, that's just the empty array. It doesn't contain anything, so clearly
// it doesn't contain the thing you're trying to remove
//
// (item, array) => isEmpty(array) ? array : 'Something else here for non-empty arrays)
//
// Next, if the first item is equal to what we want to remove...?
//
// And next, if that's not the case. We have a first item (which we need to keep) ...
//
// ... and a rest-of-array from which we need to remove the item ...

// ---------------------------
// (EXAMPLE SOLUTION)
let remove = (item, array) => isEmpty(array)
  ? array
  : first(array) === item
    ? rest(array)
    : prepend(first(array), remove(item, rest(array)));

log( 'removing an item: ', remove(30, a) );


// Up to this point we've worked with functions that when called, evaluate a single expression
// and give us back the result of that evaluation. It's surprising how common these functions are
// (and you'll see them used a great deal in some of the most common JavaScript programming
// idioms). Thinking about functions in this way encourages a simple and particularly powerful
// style of programming - functional programming. 
// 
// Sometimes, however, we want more than a single expression in a function. Instead of a single 
// expression, we can give a function expression several _statements_ if we enclose them in 
// braces {}. Compare the following


let complicatedCalculation1 = (a, b) => (a * b) + (a + b) - (a * b + 3)/(2 * (a + b));

let complicatedCalculation2 = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum - (product + 3)/(2 * sum);
};

log( complicatedCalculation1(11,70), complicatedCalculation2(11,70));

// Note in the second form of the function
// - we can use 'let' to introduce variables inside the function. Just like the
// names used to pass arguments into the function, these are local to the function
// itself. This is important - why?
//
// - we have to define the result of evaluating the function using the special word return.
//
// (For the hyper-keen: this is because the braces enclose a sequence of _statements_, not
// _expressions_. In JavaScript, Statements don't evaluate to a value, only expressions do.)
//
// Which would you rather read?

// Some practice in functions
//
// A function to return the square of half of a passed number
// A function that returns true if the passed number is divisible by 2 with no
//     remainder, false otherwise
// A function that takes 2 number arguments, that returns true if the first number
//     is divisible by the second with no remainder, false otherwise

// A function that takes 2 value arguments, and returns true if the arguments are equal,
//     false otherwise
// (try passing this two empty arrays or empty objects. What would you have to do to test
//  whether these had the same structure/contents?)
//
// How would you use this last function to test whether one of your other functions was
// returning the correct values?
//
// Write a function chooseMessage(aBoolean, ifTrue, ifFalse) that takes a boolean and two other arguments
// and evaluates to the first - ifTrue - if the boolean is true, the second - ifFalse - otherwise
//
// Use these two functions to write a third, check(actual, expected, message) that returns the
// string 'OK' if actual and expected are equal, or the message if not.
//
// Now use this function to test the first functions you've written.







