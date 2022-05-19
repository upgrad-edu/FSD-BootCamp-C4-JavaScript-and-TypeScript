function showType(x: number | string) {
  if (typeof x === "number") {
    return `The result is ${x + x}`
  }
  throw new Error(`This operation can't be done on a ${typeof x}`)
}

showType("I'm not a number")
// Error: This operation can't be done on a string

showType(7)
// Output: The result is 14