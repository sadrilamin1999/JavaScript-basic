const students = [
  {
    id: 450,
    name: "Sadril",
    gpa: 4.22,
  },
  {
    id: 420,
    name: "Amin",
    gpa: 3.22,
  },
  {
    id: 430,
    name: "Shuvo",
    gpa: 4.5,
  },
];
const students1 = () => students.filter((x) => x.gpa > 4).map((Y) => Y.name);
console.log(students1());
