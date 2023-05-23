const numbers = [2, 3, 4, 5, 6, 7, 9];
const newNum = numbers.map((number) => number * 2);
console.log(newNum);

// filter

const myNums = [4, 6, 8, 10, 12, 13, 14, 15];
const large = myNums.filter((num) => num > 10);
console.log(large);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const largeWords = words.filter((word) => word.length > 6);
console.log(largeWords);
