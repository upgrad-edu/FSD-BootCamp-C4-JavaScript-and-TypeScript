var date_diff_indays = function (date1, date2) {
  dt1 = new Date(date1);
  dt2 = new Date(date2);
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
};
console.log(date_diff_indays("04/02/2014", "11/04/2014"));
console.log(date_diff_indays("12/02/2014", "11/04/2014"));
