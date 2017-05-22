'use strict';

// Some statements control the flow of execution of a program

// IF is fundamental.

let apples = 5;

if (apples > 15) {
  console.log('That is a lot of apples!');
  console.log('Can I have some?');
}

// if (expression) statement
// -statement- executed if -expression- evaluates to something true
// -statement- can be a single statement or an empty statement, or a block as above

if (apples < 2) console.log('You need more apples...');

// It's considered good practice to _always_ use a block: why, do you think?
// Could you get confused? 
// What does this do:

if (apples < 2)
  console.log('Short of apples, there');
  console.log('Maybe buy some more?');


// ===================

// if (expression) statement1 else statement2
let pears = 25;
if (pears < 10) {
  console.log('You might need some more pears for now.');
} else {
  console.log('You need to start eating some of those pears...');
}

// statement2 can be any statement. Above it's a block including an if statement

if (pears < 5) {
  console.log('Time to buy pears');
} else if (pears > 20) {
  console.log('Woah! Lots of pears, make some pear jam...');
}

// Here's a  more advanced question for you. When we talked about expressions we introduced
// the _ternary operator_: (boolean expression) ? (evaluate-if-true) : (evaluate-if-false)

(pears < 10) ? console.log('You might need more pears') : console.log('You need to start eating some of those pears...');


// What's the difference between this and the if ... then ... else ... statement?



