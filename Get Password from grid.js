function getPassword(grid, directions) {
  // your code here
  let pass = "";
  let initialP = "";
  let iAux = 0;
  let jAux = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "x") {
        initialP = grid[i][j];
        iAux = i;
        jAux = j;
      }
    }
  }

  for (direction of directions) {
    if (direction === "up") {
      iAux -= 1;
    }
    if (direction === "down") {
      iAux += 1;
    }
    if (direction === "left") {
      jAux -= 1;
    }
    if (direction === "right") {
      jAux += 1;
    }
    if (direction === "upT") {
      iAux -= 1;
      pass += grid[iAux][jAux];
    }
    if (direction === "downT") {
      iAux += 1;
      pass += grid[iAux][jAux];
    }
    if (direction === "leftT") {
      jAux -= 1;
      pass += grid[iAux][jAux];
    }
    if (direction === "rightT") {
      jAux += 1;
      pass += grid[iAux][jAux];
    }
  }

  return pass;
}
