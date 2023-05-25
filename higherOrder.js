const square = (num) => {
  return num * num;
};

const higherOrder = (num, callback) => {
  console.log(callback(num));
};
higherOrder(6, square);
