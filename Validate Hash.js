function malwareValidate(hashArr) {
  return [...new Set(hashArr.filter(el => el.match(/[a-z]/g)?.length === 5 && el.match(/[0-9]/g)?.length === 5 && !el.match(/\W/)))];
}