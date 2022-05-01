var s = "abc";

console.log(
  // split the string into individual char array
  s
    .split("")
    .map(function (v) {
      // iterate and update
      return v + v;
      // join the updated array
    })
    .join("")
);
