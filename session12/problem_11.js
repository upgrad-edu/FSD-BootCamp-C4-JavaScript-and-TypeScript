let sum = 0;
const num = 153;
let temp = num;
while (temp > 0) {
  let remainder = temp % 10;
  sum += remainder * remainder * remainder;
  temp = parseInt(temp / 10);
}
if (sum == num) {
  console.log(`${num} is an Armstrong Number`);
} else {
  console.log(`${num} is not an Armstrong Number.`);
}
