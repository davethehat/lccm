const stringUtil = require('../src/stringUtil');

const assert = require('assert');


const testCapitalize = () => {
  const shouldCapitalizeFirstLetterOfPassedWord = () => assert.equal(stringUtil.capitalize('hello'), 'Hello');
  const shouldIgnoreInitialNonAlpha             = () => assert.equal(stringUtil.capitalize('12345'), '12345');
  const shouldLeaveInitialCapitalLetter         = () => assert.equal(stringUtil.capitalize('Hello'), 'Hello');
  
  shouldCapitalizeFirstLetterOfPassedWord();
  shouldIgnoreInitialNonAlpha();
  shouldLeaveInitialCapitalLetter();
};

const testTitleCase = () => {
  const shouldCapitalizeEachWordInString = () => assert.equal(stringUtil.titleCase('programming made easy'), 'Programming Made Easy' );
  const shouldTrimAndCombineWhitespace   = () => assert.equal(stringUtil.titleCase('   programming   made\t easy\n   '), 'Programming Made Easy');

  shouldCapitalizeEachWordInString();
  shouldTrimAndCombineWhitespace();
};

const runTests = () => {
  console.log('Running tests...');

  testCapitalize();
  testTitleCase();

  console.log('All OK!')
};

runTests();