// This is just a bit of housekeeping that lets us pace this file nicely...
const exit = process.exit;
const log = console.log;

// Remember prepend?
const prepend = (item, array) => [item].concat(array);

// Now we have a bit of extra room we can also expand our perspective on objects.

// Recall that in an earlier script we looked at objects:

let me = { name: 'David'};

// Let's take advantage of the extra space and build a small set of objects for (oh, say) a video website.

let meFlix = {
  siteName: 'MeFlix',
  movies: [],
  users: []
};

log( 'meFlix, initial state:', meFlix );

exit();

// Remember that an object is a container for other items, which we can access by name. If you had to
// describe the object above, what would you say?
// Now some videos:

let theForceAwakens = {
  title: 'Star Wars: The Force Awakens',
  director: 'J. J. Abrams',
  releaseDate: '18 December 2015'
};

let starTrekBeyond = {
  title: 'Star Trek Beyond',
  director: 'Justin Lin',
  releaseDate: '22 July 2016'
};

let gl = {
  firstName: 'George',
  lastName:  'Lucas'
};

meFlix.movies = [theForceAwakens, starTrekBeyond];
meFlix.users = [gl];

log ( 'meFlix, with some movies: ', meFlix);

exit();

// Objects are a fundamental part of JavaScript, and unlike in some other languages it's incredibly easy
// to create and modify them. Just typing '{}' gives you a new, empty object. [NB not quite as empty as
// you might imagine, but that's a later story].

// Can you write a function expression that creates and returns an empty object?
// Do you remember how to write a function expression that takes no arguments?
// Try a couple of things in the REPL first and see what gives. If you need to, check
// out the last section of the functions script for a reminder.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// You might have tried any or all of these:
//

// Take 1
let makeMeAnObject1 = () => {};
log( 'makeMeAnObject1:', makeMeAnObject1() );

// Do you get what you expected?
// If not, why not?
// What do braces mean in a functional expression?

// Take 2
let makeMeAnObject2 = () => { {} };
log( 'makeMeAnObject2:', makeMeAnObject2() );

// Do you get what you expected?
// If not, why not?
// What do you need to do inside braces to
// get a value out of a function?

// Take 3
let makeMeAnObject3 = () => { return {}; };
log( 'makeMeAnObject3:', makeMeAnObject3() );

// At last. But it looks a bit verbose.
// Can we do anything to the braces to
// tell JavaScript we want an object, not
// an empty sequence of statements?

// Take 4
let makeMeAnObject4 = () => ( {} );
log( 'makeMeAnObject4:', makeMeAnObject4() );

exit();

// Neat. The parentheses ensure that their contents are evaluated as an
// expression, so we get what we want.

// The point of this little diversion: Can you write a function that
// takes a title, director and release date, and returns an object
// like the ones above, representing a movie?

let makeMovie = (title, director, releaseDate) => 'your code here';

// Using our makeMovie function, we can now write some code to
// (a) make a movie
// (b) given the movies from myFlix
// (c) prepend the new movie to these movies
// (d) put the movie list back in myFlix

// Write these out as separate statements, execute them and take a look at
// myFlix afterwards.


// --- your code here ---
// ----------------------


// Now, write a function that
// (a) takes 2 arguments: a movie site like meFlix, and a movie created by makeMovie
// (b) creates a new list of movies by taking the movies from the passed site and
//     prepending the new movie
// (c) puts the new movie list back in the site


let addMovieToSite = (site, movie) => {
  // --- your code here ---
  // ----------------------
};


let twoThousandAndOne = makeMovie('2001: A Space Odyssey', 'Stanly Kubrick', '10 May 1968');

addMovieToSite(meFlix, twoThousandAndOne);

log('meFlix, after 2001:', meFlix);

// How would it be if we could add a function like addMovieToSite to
// the site itself? Well, if you remember from the previous object script,
// a field in an object can hold anything, in particular it can hold a
// function. And within the function, there's a special variable 'this',
// which, if the function is accessed and invoked via its object, evaluates
// to the object. A small reminder:

let whatIsThis = {
  message: 'I am an object for demonstration purposes only...',
  foo: function() { log('Logged from foo inside whatIsThis:', this.message )  }
};

whatIsThis.foo();

// Add a field to meFlix that's
// - a function, which takes a movie as an argument
// - uses 'this' to get meFlix's movies, prepend the movie, and put this new set of movies back
// - remember, you'll need to use 'function' and not '=>' to define this method

meFlix.addMovie = function(movie)  {
  // --- your code here ---
  // ----------------------
};

let darkStar = makeMovie('Dark Star', 'John Carpenter', '?? April 1974');

meFlix.addMovie(darkStar);

log( 'meFlix, with Dark Star', meFlix );


// Now (1) write a function to create a user
// and (2) add a method to meFlix that adds a user to the list of users




/* ================================================================

So at this point we know about
- values (strings, numbers, booleans)
- variables (labels or names for variables)
- expressions (using values or variables standing for values to give us another value)
- arrays (and functional expressions)
- objects (and functions that can access object members)
- statements (briefly, introduced as a way of letting a function do more)

Everything we do in JavaScript is built from these! We're now in a position to
pull things together into larger worlds...

 ================================================================ */