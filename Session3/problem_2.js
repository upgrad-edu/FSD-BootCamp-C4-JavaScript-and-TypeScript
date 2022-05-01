function sumOddNumbers(num) {
  var sum = 0;

  if (num > 0) {
    for (i = 1; i <= num; i++) {
      sum += 2 * i - 1;
    }
  }

  return sum;
}

console.log("Sum is :: ", sumOddNumbers(5));
