// fibonacchi
let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// factorial
let number = 1;
for (let i = 1; i <= 10; i++) {
  number = number + i;
}
console.log(number);
