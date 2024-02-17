function countAnimals(animals, count) {
  let array = [];
  for (let animal of count) {
    let regex = new RegExp(animal, "g");
    animals.match(animal) ? array.push(animals.match(regex).length) : array.push(0);
  }
  return array;
}
