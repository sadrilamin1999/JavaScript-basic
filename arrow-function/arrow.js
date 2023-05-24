"use strict";

const students = [
  {
    name: "Sadril",
    id: 201,
    cgpa: 3.22,
  },
  {
    name: "Arif",
    id: 105,
    cgpa: 2.88,
  },
  {
    name: "Naimur",
    id: 205,
    cgpa: 3.44,
  },
];

const studentsName = () => {
  return students.filter((x) => x.cgpa > 3).map((y) => y.name);
};

const stdNames = studentsName();
const [std1, std2] = [...stdNames];
console.log(std1);
console.log(std2);
