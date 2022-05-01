function truncate_string(str1, length) {
  if (str1.constructor === String && length > 0) {
    return str1.slice(0, length);
  }
}
console.log(truncate_string("Darsh Sanghvi", 4));
