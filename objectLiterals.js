function studentInfo(name, age) {
  return {
    name,
    age,
  };
}
console.log(studentInfo("Sadril", 25));

let message = {
  body() {
    console.log("Hello this is object function.");
  },
};
message.body();
