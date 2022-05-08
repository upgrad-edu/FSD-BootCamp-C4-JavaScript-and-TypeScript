function insertHyphen(num:number) {
  var strArr = num.toString().split('');
  var numArr = strArr.map(Number);
    for(var i = 0; i < numArr.length; i++) {
      if(numArr[i-1]%2===0 && numArr[i]%2===0) {
        numArr.splice(i, 0, '-');
      }
    }
  return numArr.join('');
}