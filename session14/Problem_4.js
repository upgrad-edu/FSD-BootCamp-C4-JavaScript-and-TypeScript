const removeAtIndex = (arr, removeArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (removeArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !removeArr.includes(i));
  arr.length = 0;
  pulled.forEach((v) => arr.push(v));
  return removed;
};
let array = ["a", "b", "c", "d", "e", "f"];
console.log(removeAtIndex(array, [1, 5]));
