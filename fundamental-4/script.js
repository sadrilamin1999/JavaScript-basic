// frist-class and higher order function

function double(number) {
  return number * 2;
}

function transformer(num, fn) {
  return fn(num);
}
// console.log(transformer(25, double));
