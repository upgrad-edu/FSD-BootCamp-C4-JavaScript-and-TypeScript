var isDate = function (input) {
  if (Object.prototype.toString.call(input) === "[object Date]") return true;
  return false;
};

console.log(isDate("October 13, 2014 11:13:00"));
console.log(isDate(new Date(86400000)));
console.log(isDate(new Date(99, 5, 24, 11, 33, 30, 0)));
console.log(isDate([1, 2, 4, 0]));
