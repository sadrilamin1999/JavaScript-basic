const numbers = [2, 4, 5, 6, 7, 8, 9, 10];
const even = [];
const odd = [];

numbers.forEach((number) =>
  number % 2 == 0 ? even.push(number) : odd.push(number)
);
console.log(even);
console.log(odd);

// square number
const nums = [2, 3, 4, 5, 6];
const square = [];
nums.forEach((num) => square.push(num * num));
console.log(square);

const myNums = [1, 2, " 3", 4, 5, "7"];
let sum = 0;
myNums.forEach((num) => {
  if (typeof num === "number") {
    sum = sum + num;
  }
});

console.log(sum);
