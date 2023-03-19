let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    const even = i;
    evenSum += even;
  } else {
    const odd = i;
    oddSum += odd;
  }
}
console.log(evenSum);
console.log(oddSum);
