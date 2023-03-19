let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log(a, b);
// another away
let x = 12;
let y = 6;
[y, x] = [x, y];
console.log(x, y);
