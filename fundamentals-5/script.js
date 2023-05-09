// Math----------
// Math.abs
console.log(Math.abs(-2));
// Math.ceil
console.log(Math.ceil(4.6));
// Math.floor
console.log(Math.floor(4.6));
// Math.round
console.log(Math.round(4.8));
// Math.max
console.log(Math.max(15, 35));
// Math.min
console.log(Math.min(15, 35));
// Math.pow
console.log(Math.pow(2, 4));
//Math.sqrt
console.log(Math.sqrt(4));
// Math.random
console.log(Math.floor(Math.random() * 10));
// Math.trunc
console.log(Math.trunc(3.4));

// Dare
// new Date
const myDate = new Date();
console.log(myDate);
// Date.now
console.log(Date.now());
// get Date
console.log(myDate.getDate());
// getDay
console.log(myDate.getDay());
// getFullYear
console.log(myDate.getFullYear());
// getHours
console.log(myDate.getHours());
//getMunites
console.log(myDate.getMinutes());
console.log(myDate.getMilliseconds());
console.log(myDate.getMonth());

//Time and date formator
console.log(myDate.toLocaleDateString());
console.log(
  myDate.toLocaleString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

// Courency formator
const money = 150.65;

const formatedMoney = money.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(formatedMoney);
