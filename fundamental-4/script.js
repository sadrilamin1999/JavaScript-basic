// frist-class and higher order function

function double(number) {
  return number * 2;
}
function threeple(number) {
  return number * 3;
}

function transformer(num, fn) {
  return fn(num);
}
// console.log(transformer(25, double));
// console.log(transformer(10, threeple));

// call
const person = {
  name: "Sadril",
  birthYear: 1996,

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  },
};

const person2 = {
  name: "Sadril",
  birthYear: 1999,
};
// console.log(person.calcAge());
// console.log(person.calcAge.call(person2));

// apply
const myFun = person.calcAge.apply(person2);
// console.log(myFun);

// bind
const myFun2 = person.calcAge.bind(person2);
// console.log(myFun2());

// set
const mySet = new Set();
mySet.add(5);
mySet.add(15);
mySet.add("Sadril");
mySet.add(true);
mySet.delete(15);
// console.log(mySet);

const arr = [2, 6, 3, 5, 4, 6, 5, 0, 8, 2, 8];
const uniq = [...new Set(arr)];
// console.log(uniq);

// maps
const zoo = new Map();
zoo.set("tiger", 5);
zoo.set("moneky", 10);
zoo.set("lion", 10);
zoo.set("elephent", 3);
// console.log(zoo);

for (const [property, value] of zoo) {
  // console.log(property, value);
}

// filter
const nuns = [10, 23, 20, 40, 35, 75];
const filteredNums = nuns.filter((num) => num % 2 !== 0);
// console.log(filteredNums);
