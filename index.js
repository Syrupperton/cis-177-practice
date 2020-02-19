//fizz buzz
//log the numbers from 1 to 100
//however, if the number is divisible by 3, log "Fizz!"
//if the number is divisible by 5 , log "Buzz!"
//if the number is divisible by 3 and 5, log "Fizzbuzz!"

let i = 1;

while (i <= 100) {
  if (!(i % 3) && !(i % 5)) {
    console.log(i + " FizzBuzz!");
  } else if (!(i % 3)) {
    console.log(i + " Fizz!");
  } else if (!(i % 5)) {
    console.log(i + " Buzz!");
  } else {
    console.log(i);
  }
  i++;
}

//'!' is a unary operator that auto makes the following into a boolean variable.
console.log(Boolean(0)); //false
console.log(!0); //true
console.log(!"Hello"); //false
console.log(!""); //true
