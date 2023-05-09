const clockBtn = document.querySelector(".clockBtn");
const timer = document.querySelector(".timer");

clockBtn.addEventListener("click", startClock);

function startClock() {
  let date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  const time = `${hour} : ${minute} : ${second}`;

  timer.textContent = time;
  setInterval(startClock, 1000);
}
