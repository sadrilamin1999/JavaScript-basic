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
console.log(myFun2());
