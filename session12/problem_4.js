var addMinutes = function (dt, minutes) {
  return new Date(dt.getTime() + minutes * 60000);
};
console.log(addMinutes(new Date(2014, 10, 2), 30).toString());
