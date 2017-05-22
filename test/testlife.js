'use strict';

var fileToTest = process.argv[2];
const life = require('../' + fileToTest);
const assert = require('assert');

console.log('Testing ' + fileToTest + '...')

runTests();


function runTests() {
  testGridEmpty();
  testGridFull();
  testMiddleLives1();
  testMiddleLives2();
  testMiddleLives3();
  testMiddleDies();

  console.log('All OK!');
}

function testGridEmpty() {
  let input = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
  ];
  let expected = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
  ];
  let actual = life.nextGeneration(input);
  assert.deepEqual(actual, expected, 'All should be dead');
}

function testGridFull() {
  let input = [
    [true,true,true],
    [true,true,true],
    [true,true,true]
  ];
  let expected = [
    [true,false,true],
    [false,false,false],
    [true,false,true]
  ];
  let actual = life.nextGeneration(input);
  assert.deepEqual(actual, expected, 'Corners should live');
}

function testMiddleLives1() {
  let input = [
    [true,false,true],
    [false,false,false],
    [false,true,false]
  ];
  let actual = life.nextGeneration(input);
  assert(actual[1][1], 'Middle should regenerate with three live neighbours')
}

function testMiddleLives2() {
  let input = [
    [true,false,false],
    [false,true,false],
    [false,false,true]
  ];
  let actual = life.nextGeneration(input);
  assert(actual[1][1], 'Middle should live if live with two live neighbours')
}

function testMiddleLives3() {
  let input = [
    [true,false,false],
    [false,true,true],
    [false,false,true]
  ];
  let actual = life.nextGeneration(input);
  assert(actual[1][1], 'Middle should live if live with three live neighbours')

}

function testMiddleDies() {
  let input = [
    [true,false,false],
    [false,true,true],
    [true,false,true]
  ];
  let actual = life.nextGeneration(input);
  assert(!actual[1][1], 'Middle should die if live with four live neighbours')
}

