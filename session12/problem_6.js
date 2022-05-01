var lastday = function (y, m) {
  return new Date(y, m + 1, 0).getDate();
};
console.log(lastday(2014, 0));
console.log(lastday(2014, 1));
console.log(lastday(2014, 11));
