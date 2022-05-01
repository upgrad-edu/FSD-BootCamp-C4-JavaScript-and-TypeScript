function detectDataType(value) {
  var dtypes = [Function, RegExp, Number, String, Boolean, Object];

  if (typeof value === "object" || typeof value === "function") {
    for (x = 0, len = dtypes.length; x < len; x++) {
      if (value instanceof dtypes[x]) {
        return dtypes[x];
      }
    }
  }

  return typeof value;
}
console.log(detectDataType(12));
console.log(detectDataType("Darsh"));
console.log(detectDataType(false));
