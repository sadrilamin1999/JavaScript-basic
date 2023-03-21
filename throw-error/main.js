/* const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("number");

checkBtn.addEventListener("click", () => {
  const num = input.value;
  // console.log(num);
  try {
    if (num < 10) {
      throw "input is to low";
    } else if (num > 25) {
      throw "input is to high";
    }
  } catch (error) {
    console.log(error);
  }
});
 */
const checkBtn = document.querySelector("#check-btn");
const input = document.querySelector("#number");

checkBtn.addEventListener("click", () => {
  const num = input.value;
  try {
    if (num < 10) {
      throw "input is to low";
    } else if (num > 25) {
      throw "input is to high";
    }
  } catch (err) {
    console.log(err);
  }
});
