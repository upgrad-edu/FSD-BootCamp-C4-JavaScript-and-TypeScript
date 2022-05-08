function firstOddNumbersSum(n: number): number {
  if (n === 0) {
    return 0;
  }
  let num: number = n * 2 - 1;
  console.log(num);
  let sum: number = num + firstOddNumbersSum(n - 1);
  return sum;
}