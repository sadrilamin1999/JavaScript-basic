const user = {
  name: "Sadril",
  Id: 2023,
  age: 25,
  lover: {
    name: "Janina",
    age: 18,
  },
};
console.log(user);
const userJson = JSON.stringify(user);
console.log(userJson);
const userParse = JSON.parse(userJson);
console.log(userParse);
