function leapYearRange(st_year, end_year) {
  var year_range = [];
  for (var i = st_year; i <= end_year; i++) {
    year_range.push(i);
  }
  var new_array = [];

  year_range.forEach(function (year) {
    if (testLeapYear(year)) new_array.push(year);
  });

  return new_array;
}

function testLeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}

console.log(leapYearRange(2000, 2012));
