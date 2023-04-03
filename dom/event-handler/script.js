const h1 = document.querySelector("h1");
const buttonOne = document.querySelector(".button1");
const buttonTwo = document.querySelector(".button2");
const buttonThree = document.querySelector(".button3");

buttonOne.addEventListener("click", function () {
  h1.innerHTML = `You have clicked ${buttonOne.innerHTML}`;
});

buttonTwo.addEventListener("click", function () {
  h1.innerHTML = "You have clicked Button2";
});
buttonThree.addEventListener("click", function () {
  h1.innerHTML = `You have clicked ${buttonThree.innerHTML}`;
});
