const isPromiseLike = (obj) =>
  obj !== null &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

console.log(
  isPromiseLike({
    then: function () {
      return "";
    },
  })
);
console.log(isPromiseLike(null));
console.log(isPromiseLike({}));
