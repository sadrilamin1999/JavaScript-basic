let person = {
  firstName: "John",
  lastName: "Doe",
  middleName: "C.",
  currentAge: 28,
};
let { firstName, lastName, middleName, currentAge } = person;
console.log(firstName);
console.log(lastName);
console.log(middleName);
console.log(currentAge);

const student = {
  id: 12,
  fullName: "Sadril",
};

const studentInfo = ({ id, name }) => {
  console.log(`id: ${id}, name: ${name}`);
};
studentInfo(student);
