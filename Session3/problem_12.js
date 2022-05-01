function countSubstring(str, searchValue) {
  let count = 0,
    i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
}

console.log(
  countSubstring("the Javascripr language is the most easiest language", "the")
);
