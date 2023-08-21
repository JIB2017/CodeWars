const snail = function (array) {
  // enjoy
  let i1 = 0; //
  let i2 = array.length - 1; //
  let j1 = 0; //
  let j2 = array.length - 1; //

  let flag = "RIGHT";

  while (flag) {
    if (j === j2) {
      i1 += 1;
      flag = "DOWN";
    }
    if (i === i2) {
      j2 -= 1;
      flag = "LEFT";
    }

    if (j === j1) {
      i2 -= 1;
      flag = "UP";
    }

    if (i === i1) {
      j1 += 1;
      flag = "RIGHT";
    }

    if (flag === "RIGHT") {
    }

    if (flag === "DOWN") {
    }

    if (flag === "LEFT") {
    }

    if (flag === "UP") {
    }
  }
};
