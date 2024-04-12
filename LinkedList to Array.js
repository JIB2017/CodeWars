function listToArray(list) {
  let aux = list.next;
  let array = [];
  array.push(list.value);
  while (aux) {
    array.push(aux.value);
    aux = aux.next;
  }
  return array;
}
