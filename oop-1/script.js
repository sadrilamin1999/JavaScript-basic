"use strict";
// Class
class Player {
  constructor(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
  playerDetail() {
    return `${this.name} is a ${this.skill}`;
  }
}

const messi = new Player("Messi", 36, "Footballler");
console.log(messi.playerDetail());
const moinAli = new Player("Moin Ali", 35, "Cricketer");
console.log(moinAli);
console.log(moinAli.playerDetail());

// inheritance
class Father extends Player {
  constructor(name, age, skill, child) {
    super(name, age, skill);
    this.child = child;
  }
}

const shuvo = new Father("Shuvo", 35, "Business man", 5);
console.log(shuvo);
console.log(shuvo.child);
