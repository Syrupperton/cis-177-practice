//sum the numbers from 1 to 10
let x = 0;
let sum = 0;

while (x <= 10) {
  sum = sum + x;
  x++;
}
console.log(sum);

//fizz buzz
//log the numbers from 1 to 100
//however, if the number is divisible by 3, log "Fizz!"
//if the number is divisible by 5 , log "Buzz!"
//if the number is divisible by 3 and 5, log "Fizzbuzz!"

let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz!");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz!");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz!");
  } else {
    console.log(i);
  }
  i++;
}
