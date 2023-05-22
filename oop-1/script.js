"use strict";

// constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// instance
const person1 = new Person("Sadril", 25);
const person2 = new Person("Shohan", 28);
/* console.log(person1.name);
console.log(person2.name, person2.age); console.log(Person.prototype);
console.log(person1.__proto__);
console.log(Person.prototype === Person); */

// Prototypal inheritance and the Prothtype chain
// constructor1
function Animal(name) {
  this.name = name;
}
// prototype for constructor1
Animal.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

// constructor 2
function Cat(name, birthYear) {
  Animal.call(this, name);
  this.birthYear = birthYear;
}

// prototype for constructor 2
Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.calAge = function () {
  console.log(`Age: ${new Date().getFullYear() - this.birthYear} year/s`);
};

const cat1 = new Cat("Hnagry", 2018);
/* console.log(cat1.name);
cat1.calAge();
cat1.greet();
 */
