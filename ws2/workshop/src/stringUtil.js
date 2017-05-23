// Simple utilities for string manipulation
'use strict';

const capitalize = aString => aString[0].toUpperCase() + aString.slice(1);

const titleCase = aString => aString.split(/\s/).filter(s => !!s).map(capitalize).join(' ');

module.exports = {
  capitalize: capitalize,
  titleCase: titleCase
};

