"use strict";

// Static
class Calculation {
  constructor() {}

  sum(a, b) {
    console.log(a + b);
  }
  static(a, b) {
    console.log(a * b);
  }
}

const cal1 = new Calculation();
// cal1.sum(5, 6);
