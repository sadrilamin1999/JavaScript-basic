const normalPerson = {
  fristName: "Sadril",
  lastName: "Amin",
  salary: 20000,
  billCharge: function (amount) {
    return (this.salary = this.salary - amount);
  },
};
normalPerson.billCharge(5000);

const spacialPerson = {
  fristName: "Abu",
  lastName: "Kalam",
  salary: 35000,
};

const spacialPersonBillCharge = normalPerson.billCharge.bind(spacialPerson);
spacialPersonBillCharge(15000);
console.log(spacialPerson.salary);
