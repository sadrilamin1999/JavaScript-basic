/* const input = document.querySelector("input");

input.addEventListener("change", changeHandler);

function changeHandler(e) {
  // console.log(e);
  // console.log(e.target.className);
  // console.log(e.target.id);
  const value = e.target.value;
  console.log(value);
}
 */
// checkbox
const programs = document.querySelectorAll("input[name=program]");

Array.from(programs).map((program) => {
  program.addEventListener("change", changeHanlder);
});

function changeHanlder(e) {
  if (e.target.checked) {
    console.log(e.target.value);
  }
}

// option
const depertment = document.querySelector("#depertment");

depertment.addEventListener("change", depertmentHandler);
function depertmentHandler(e) {
  console.log(e.target.value);
}
