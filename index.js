const timeOfDay = "Good Evening!";
const greeting = "Hello and ${timeOfDay}";
console.log("${greeting}");

let newVariable;
console.log(typeof newVariable); //undefined variable
newVariable = "Intentionally left blank."; //string
console.log(typeof newVariable);
//console.log(none);  //none is not declared and will error out
console.log("{$greeting}"); //will not run until previous line is commented out

const name = "Matt";
let favoriteSong = "Chemical by The Devil Wears Prada";
let wage = 12.8;
let age = 27;
const onlyChild = false;
const satisfied = true;
let favoriteThing = "Fun";
console.log(typeof favoriteThing);
favoriteSong = "Wave of Youth by The Devil Wears Prada";
favoriteThing = 13;
age = 28;
