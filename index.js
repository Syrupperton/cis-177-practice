//example array
const myArray = ["string", 23, "Another String", true, false];

console.log(myArray[1]); //shows the second spot in the array because arrays start with 0
console.log(myArray.length); //shows the length of the array, always one higher than the highest value because it starts at 0
console.log(myArray[99]); //undefined because the array does not have that many values.
myArray[1] = 177; //changes the value of '23' to '177', can mutate but not reassign values in arrays
myArray[1000] = "Matt"; //expands the array to 1001 values and everything without a value is undefined
console.log(myArray[1000]); //Matt
console.log(myArray.length); //1001
console.log(myArray[888]); //undefined

const data = [
  { name: "Matt", hobbies: ["gaming", "working out"] },
  { name: "Sheridyn" },
  { name: "Jonathon" }
];

console.log(data[0].hobbies[1]);

//iterate over data and log every name.
for (let i = 0; i <= data.length - 1; i++) {
  console.log(data[i]);
}
