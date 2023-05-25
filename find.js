const nums = [2, 4, 5, 6, 8, 20];
const odd = nums.find((num) => num % 2 !== 0);
console.log(odd);

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const singleFood = inventory.find(({ name }) => name === "bananas");
console.log(singleFood.name);
