'use strict';

// We can put statements in a block. A block (sometimes called a compound statement) is itself a statement.

{
  console.log("Hello from a block...");

  let sum = 2 + 3;

  console.log('2 + 3 = ' + sum);

  sum = sum * sum;

  console.log('Squaring it gives us ' + sum);
}


// A block can be empty...
{
  
}

// More on blocks, and why they're useful, later...