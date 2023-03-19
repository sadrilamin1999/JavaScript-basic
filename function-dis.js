const studet = {
  name: "sadril",
  roll: 77,
  batch: 65,
};
const studentInfo = ({ name, roll, batch }) => {
  console.log(name, roll, batch);
};
studentInfo(studet);
