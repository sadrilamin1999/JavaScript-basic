// setTimeOut
const saveBtn = document.querySelector(".save");
const message = document.querySelector(".message");

saveBtn.addEventListener("click", myMessage);

function myMessage() {
  message.textContent = "User saved!";

  setTimeout(() => {
    message.textContent = "";
  }, 2000);
}
