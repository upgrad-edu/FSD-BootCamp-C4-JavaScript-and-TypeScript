let a = [5, 7],
  count = 10,
  missing = []

for (let i = 1; i <= count; i++) {
  if (a.indexOf(i) === -1) {
    missing.push(i)
  }
}
console.log(missing)