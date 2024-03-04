function friend(friends) {
  let notFoe = [];

  for (let friend of friends) {
    if (friend.length === 4) {
      notFoe.push(friend);
    }
  }

  return notFoe;
}
