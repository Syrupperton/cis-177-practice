let age = prompt("What is your age?");

age = Number(age);

//TODO: If the user enters something that EXPLICITLY COVERTS to 'NaN',
//alert them.
//if (!NaN) {
if (!age) {
  alert("This is not a number!");
}
