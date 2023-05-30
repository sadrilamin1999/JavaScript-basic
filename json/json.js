const user = { id: 1200, name: "Sadril" };
const userInfo = JSON.stringify(user);
console.log(userInfo);
const userParse = JSON.parse(userInfo);
console.log(userParse);
