//log the numbers from 1 to 10.
//in parentheses
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//for loop scopes everything within it
//while loop would use the global variables
//for loop makes it much easier to track bugs

//add numbers from 1 to 10
let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;

  console.log(total);
}
