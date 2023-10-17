const normalPerson = {
  fristName: "Sadril",
  lastName: "Amin",
  salary: 20000,
  billCharge: function (amount, tips, tax) {
    return (this.salary = this.salary - amount - tips - tax);
  },
};
// normalPerson.billCharge(5000);

const spacialPerson = {
  fristName: "Abu",
  lastName: "Kalam",
  salary: 35000,
};

// Bind
/* const spacialPersonBillCharge = normalPerson.billCharge.bind(spacialPerson);
spacialPersonBillCharge(15000);
console.log(spacialPerson.salary); */

// Call
/* normalPerson.billCharge.call(spacialPerson, 3000, 300, 30);
console.log(spacialPerson.salary); */

// Apply
normalPerson.billCharge.apply(spacialPerson, [3000, 300, 30]);
console.log(spacialPerson.salary);
