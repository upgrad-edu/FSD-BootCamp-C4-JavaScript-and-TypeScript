function stringEndsWith(str, suffix) {
  if (str === null || str === "" || suffix === null || suffix === "") {
    return false;
  } else {
    str = str.toString();
    suffix = suffix.toString();
  }
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

console.log(stringEndsWith("JS PHP PYTHON", "PYTHON"));