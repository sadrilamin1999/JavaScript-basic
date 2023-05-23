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
