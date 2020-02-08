const player = {
  user: "Username",
  armor: {
    head: "helmet",
    torso: "chestpiece",
    arms: "gauntlets",
    legs: "bracers"
  },
  weapon: {
    melee: "sword",
    range: "bow"
  },
  attributes: {
    charisma: "50",
    strength: "50",
    dexterity: "50"
  }
};

player.armor.helmet = "Medieval";

console.log(player.armor.helmet);
