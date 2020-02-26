//IMPLICIT CONVERSION
// || means OR
//If first EXPRESSION is 'truthy', then we don't EVALUATE the right hand side.

//If 'prompt' RETURNs an empty STRING - b/c of the '||' this will be IMPLICITLY converted to 'false'
//'name' will be a STRING, but it might be blank
let name = prompt("What is your name?");

// console.log(Number(name)) this would convert name from a 'string' to a 'number'

//if 'name' is blank, then '!' will convert to a Boolean (false)
//if 'name' is not blank, then '!' will convert to a Boolean (NOT TRUE)
while (!name) {
  //'while (name === "")' <-- this also would work for the 'while' line
  name = prompt("What is your name?");
}

console.log(name);
