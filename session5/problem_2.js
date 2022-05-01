var a = [3, 5, 7, 8];
a.reverse();

console.log(a);

//Manual way
function reverseArr(input) {
  var ret = new Array();
  for (var i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
}

var a = [3, 5, 7, 8];
console.log(reverseArr(a));
