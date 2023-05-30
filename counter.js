function counter(num) {
  let count = num;
  return function () {
    count++;
    return count;
  };
}

const fristCounter = counter(10);
console.log(fristCounter());
console.log(fristCounter());
console.log(fristCounter());
console.log(fristCounter());
