// distructure array
const arr = [10, 20, 30, 40];
const [frist, second, , fourth] = arr;
// console.log(frist, second, fourth);

// distructure object
const sutdent = {
  fristName: "Rifat",
  lastName: "Miha",
  birthYear: 1999,
};
const { fristName, birthYear } = sutdent;
// console.log(fristName, birthYear);

// spread operator
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers];
numbers.pop();
// console.log(numbers);
// console.log(newNumbers);

const human = {
  name: "Habib",
  language: "C++",
};
const animal = { ...human };
animal.name = "Lion";
// console.log(human);
// console.log(animal);

// loop in objects
const player = {
  name: "messi",
  country: "argentina",
  goal: 800,
};
const palyerEnries = Object.entries(player);

for (const [key, value] of palyerEnries) {
  console.log(key, value);
}
