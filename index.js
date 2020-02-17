//this is true because primitive data is compared by data
const a = 49;
const b = 49;

console.log(a === b);

//objects compare by reference so the below example will always be false
//false because OBJECTS are COMPARED BY REFERENCE.
const x = {
  name: "Matt"
};

const y = {
  name: "Matt"
};

console.log(x === y);
