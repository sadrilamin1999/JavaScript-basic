// frist-class and higher order function
function double(number) {
  return number * 2;
}
function triple(number) {
  return number * 3;
}
function transformer(number, fn) {
  return fn(number);
}
console.log(transformer(5, double));
console.log(transformer(7, triple));

// IIFE
(function () {
  console.log("I am run just for one time");
})();

// call apply and bind

const person1 = {
  name: "Sadril",
  birthyear: 1996,

  calcAge(name) {
    return `${new Date().getFullYear() - this.birthyear} ${name}`;
  },
};
const person2 = {
  name: "Amin",
  birthyear: 1999,
};
console.log(person1.calcAge());
console.log(person1.calcAge.call(person2, "Shuvo"));
const myFun = person1.calcAge.apply(person2, ["Habib"]);
console.log(myFun);
const myFun2 = person1.calcAge.bind(person2, "Alif");
console.log(myFun2());

// sets
const arr = [2, 4, 2, 6, 4, 6, 2, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// Map
const zoo = new Map();
zoo.set("tiger", 4);
zoo.set("monkey", 6);
zoo.set("lion", 2);

for (const [animel, count] of zoo) {
  console.log(animel, count);
}

// Array
const arr1 = [2, 3, 5, 6, 7, 8];
const arr2 = [10, 12, 13, 14, 16, 18];
const arr3 = arr1.concat(arr2);
const arrFinal = [...arr1, ...arr2];
console.log(arr1.length);
console.log(arr1.at(0));
console.log(arr1.at(-1));
console.log(arr3);
console.log(arrFinal);

// every
const nums = [5, 10, 15, 20, 25, 30, 35, 40];

const isFiveMode = nums.every((num) => num % 5 === 0);
console.log(isFiveMode);

// filter
const oddNums = nums.filter((num) => num % 2 !== 0);
console.log(oddNums);

// find
const nums2 = [5, 10, 15, 20, 25, 30, 35, 40];
const findNum = nums2.find((num) => num % 5 === 0 && num % 4 === 0);
console.log(findNum);
