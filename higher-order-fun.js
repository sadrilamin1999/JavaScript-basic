const duble = (x) => console.log(x * x);

const higherOeder = (num, callback) => callback(num);
higherOeder(12, duble);
