function separateCase(str = "", separator = " ") {
  const arr = [];
  let left = 0,
    right = 0;
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    const next = str[i + 1];
    if (
      (el.toUpperCase() === el && el.toUpperCase() !== el.toLowerCase()) ||
      !next
    ) {
      right = i + Number(!next);
    }
    if (left !== right) {
      const sub = str.substring(left, right).toLowerCase();
      arr.push(sub);
      left = right;
    }
  }
  return arr.join(separator);
}
console.log(separateCase("camelCaseString", "_"));
