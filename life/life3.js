'use strict';

module.exports = {
  nextGeneration: nextGeneration
};

function nextGeneration(world) {

  let next = createEmptyWorldFromCurrent(world);

  for (let y = 0; y < world.length; y++) {
    for (let x = 0; x < world[y].length; x++) {
      next[y][x] = cellLivesInNextGeneration(world, x, y);
    }
  }

  return next;
}

function createEmptyWorldFromCurrent(world) {
  let emptyWorld = [];
  for (let y = 0; y < world.length; y++) {
    emptyWorld[y] = [];
    for (let x = 0; x < world[y].length; x++) {
      emptyWorld[y][x] = false;
    }
  }
  
  return emptyWorld;
}

function cellLivesInNextGeneration(world, x, y) {
  let liveNeighbourCount = calculateLiveNeighbourCount(x, y, world);
  let nextLives = false;

  if (!world[y][x] && liveNeighbourCount === 3) {
    nextLives = true;
  } else if (world[y][x] && (liveNeighbourCount === 2 || liveNeighbourCount === 3)) {
    nextLives = true;
  }

  return nextLives;
}

function calculateLiveNeighbourCount(x, y, world) {
  let liveNeighbourCount = 0;
  let offsets = [-1,0,1]

  offsets.forEach(yOffset => {
    offsets.forEach(xOffset => {
      let nX = x + xOffset;
      let nY = y + yOffset;
      if (nX >= 0 && nX < world[y].length && nY >= 0 && nY < world.length && world[nY][nX]) {
        if (!(yOffset === 0 && xOffset === 0)) {
          liveNeighbourCount++;
        }
      }
    });
  });
  return liveNeighbourCount;
}

