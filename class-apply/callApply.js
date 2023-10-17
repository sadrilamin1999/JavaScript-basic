const normalPerson = {
  fristName: "Sadril",
  lastName: "Amin",
  salary: 18000,
  fullName: function () {
    console.log(this.fristName, this.lastName);
  },
  billCharge: function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
  },
};

normalPerson.billCharge(5000);
console.log(normalPerson.salary);
