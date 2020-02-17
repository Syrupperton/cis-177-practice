//PASS BY VALUE.
let x = 3;

let y = x;

console.log(y);

x = 4;
console.log(y); //PRIMITIVES CANNOT MUTATE.
//'3' that was used with 'x' previously is thrown out and replaced with 4.

//PASS BY REFERENCE.
const a = {
  name: "Matt"
};

const b = a;

a.name = "Matthew";

console.log(b); //shows 'Matthew'
//points both 'a' and 'b' to the same memory address
