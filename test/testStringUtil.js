const stringUtil = require('../lib/stringUtil');

const assert = require('assert');


const testCapitalize = () => {
  assert.equal(stringUtil.capitalize('hello'), 'Hello', 'capitalizes OK');
  assert.equal(stringUtil.capitalize('12345'), '12345', 'non-alpha first character');
  assert.equal(stringUtil.capitalize('Hello'), 'Hello', 'no change if first character is UC');
};

const testTitleCase = () => {
  assert.equal(stringUtil.titleCase('programming made easy'),             'Programming Made Easy' , 'correctly title-cases a string');
  assert.equal(stringUtil.titleCase('   programming   made\t easy\n   '), 'Programming Made Easy' , 'replaces whitespace');
};

const runTests = () => {
  console.log('Running tests...');

  testCapitalize();
  testTitleCase();

  console.log('All OK!')
};

runTests();