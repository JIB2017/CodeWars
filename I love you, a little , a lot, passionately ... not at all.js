function howMuchILoveYou(nbPetals) {
  let array = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  let i = 0;
  let j = 1;

  while (i <= nbPetals) {
    if (i === array.length) {
      i = 0;
    }

    if (j === nbPetals) {
      return array[i];
    }

    i++;
    j++;
  }
}
