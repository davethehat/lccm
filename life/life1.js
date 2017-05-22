'use strict';

module.exports = {
  nextGeneration: nextGeneration  
};

function createEmtpyWorldFromCurrent(world) {
  let next = [];

  for (let y = 0; y < world.length; y++) {
    next[y] = [];
    for (let x = 0; x < world[y].length; x++) {
      next[y][x] = false;
    }
  }
  return next;
}
function nextGeneration(world) {
  var next = createEmtpyWorldFromCurrent(world);

  let offsets = [-1,0,1];

  for (let y = 0; y < world.length; y++) {
    for (let x = 0; x < world[y].length; x++) {
      let liveNeighbourCount = 0;

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

      if (!world[y][x] && liveNeighbourCount === 3) {
        next[y][x] = true;
      } else if (world[y][x] && (liveNeighbourCount === 2 || liveNeighbourCount === 3)) {
        next[y][x] = true;
      } else {
        next[y][x] = false;
      }
    }
  }

  return next;
}

