function quarterOfTheYear(date) {
  var month = date.getMonth() + 1;
  return Math.ceil(month / 3);
}

console.log(quarterOfTheYear(new Date()));
console.log(quarterOfTheYear(new Date(2015, 1, 21)));
console.log(quarterOfTheYear(new Date(2015, 10, 18)));
