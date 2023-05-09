const counterBtn = document.querySelector(".counter");
const number = document.querySelector(".number");

counterBtn.addEventListener("click", counter);

function counter() {
  let count = 0;
  number.textContent = count;

  setInterval(() => {
    count++;
    number.textContent = count;
  }, 1000);
}
