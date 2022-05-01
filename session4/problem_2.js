function objSize(Myobj) {
  var osize = 0,
    key;
  for (key in Myobj) {
    if (Myobj.hasOwnProperty(key)) osize++;
  }
  return osize;
}

var student = {
  name: "Jonny Deep",
  sclass: "VI",
  rollno: 54,
};

var objsize = objSize(student);
console.log("Size of the current object : " + objsize);
