function doubleChar(str) {
  let n_arr = [];
  for (let i = 0; i < str.length; i++) {
    n_arr.push(str[i] + str[i]);
  }
  return n_arr.join("");
}
doubleChar("fady");
