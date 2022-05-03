const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = renameKeys({ name: "firstName", job: "Actor" }, obj);
console.log("New Object");
console.log(result);
