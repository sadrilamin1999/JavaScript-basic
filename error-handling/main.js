const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const num = document.querySelector("#textField").value;

  try {
    if (num < 10) {
      throw "Number is low";
    } else if (num > 20) {
      throw "Number is to large";
    }
  } catch (err) {
    console.log(err);
  }
});
