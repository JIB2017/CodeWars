function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Math.sqrt(sq) === Math.ceil(Math.sqrt(sq))) {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  }
  return -1;
}
