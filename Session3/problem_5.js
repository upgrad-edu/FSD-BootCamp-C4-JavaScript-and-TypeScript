function summation(n) {
  let sum = 0,
    j = 1;
  for (let i = 1; i <= n; i++) {
    sum = sum + j;

    // Appending a 1 at the end
    j = j * 10 + 1;
  }

  return sum;
}

console.log(summation(2));
