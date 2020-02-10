//relational or COMPARISON OPERATORS always yields BOOLEAN.
// console.log(1 === 2); //false

//to check if 2 things are considered to equal...
//'===' is STRICT EQUALITY
//It checks the VALUE and TYPE
// console.log(2 === "2"); //false
// console.log(2 === 3); //false
// console.log(2 !== 3); //not equal, true

// const x = 3;

//EXPRESSION is anything that evaluates to a value
//STATEMENTS combine EXPRESSIONS with keywords and other syntax
// if (x === 3) {
//{}'s establish SCOPE of the code
//   console.log("x is 3!");
// } else {
//   console.log("x is not 3!");
// }

// const age = 17;

// if (age >= 25) {
//   console.log("Renting a car is affordable");
// } else if (age >= 18) {
//   console.log("Renting will be expensive!");
// } else {
//   console.log("You can't rent a car!");
// }

const charisma = 50;

if (charisma >= 60) {
  console.log("You barter a lower price.");
} else if (charisma >= 40) {
  console.log("You pay the listed price.");
} else {
  console.log("You cannot afford the item.");
}

const strength = 50;

if (strength >= 75) {
  console.log("You break the boulder and get the rare minerals from it.");
} else if (strength >= 50) {
  console.log("You break the boulder.");
} else if (strength >= 25) {
  console.log("The boulder cracks.");
} else {
  console.log("The boulder does nothing.");
}
