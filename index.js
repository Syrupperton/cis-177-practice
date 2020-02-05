//UNDEFINED is a PRIMITIVE TYPE
//It signifies the absence of ANY value
let x;

//NULL is a PRIMITIVE
//NULL represents a deliberate assignment of nothing
x = null;
console.log(x);

//This is an OBJECT
const me = {
  name: "Matt",
  age: 27,
  pets: {
    cat: "Smokey",
    dog: {
      dog1: "Tux",
      dog2: "Stormy"
    }
  }
};

//Create a new key value pair with age = 23.
me.age = 23;
me.name = "Matthew";

//console.log(me.pet.cat); // this would read as me.undefined.cat which will give an error because you cannot use .notation on undefined

console.log(me.pets.dog.dog1);
