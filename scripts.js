//prompts will be good for our midterm with our current knowledge level.
const app = {};

//prompt is a BLOCKING operation. (blocks other things on the site)
app.game = prompt("What game are you looking for?");
if (app.game === "Destiny") {
  app.game.gameType = prompt("What game mode are you playing?");
}

console.log(app);

//log the numbers from 1 to 10.
//in parentheses
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
