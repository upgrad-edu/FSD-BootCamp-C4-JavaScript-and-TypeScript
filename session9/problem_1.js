function findEvenOdd(num, callback) {
  callback(num % 2 === 0 ? "Even" : "Odd");
}

let display = (answer) => console.log(`The number is ${answer}.`);

findEvenOdd(4, display);
