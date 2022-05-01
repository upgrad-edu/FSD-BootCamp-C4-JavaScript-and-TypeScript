function reverseNumber(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(Number(reverseNumber(32243)));
