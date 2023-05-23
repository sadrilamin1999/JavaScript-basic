// spread operaator
let numbers = [5, 6, 8];

const addNumbers = (a, b, c) => a + b + c;
console.log(addNumbers(...numbers));

let numbers1 = [1, 2, 3, ...numbers];
console.log(numbers1);

// Concat with spred operator
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
const num3 = [...num1, ...num2];
console.log(num3);

// Spread with object
const p1 = {
  name: "Sadril",
  age: 25,
};
const p2 = {
  nationality: "Bangladesh",
  religion: "Islam",
};

const p = { ...p1, ...p2 };
console.log(p);
