const countries = ["Bangladesh", "Nepal", "Vuthan"];
function setLocalStrogeHandler(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// get items
function getLocalStrogeHandler(key) {
  console.log(JSON.parse(localStorage.getItem(key)));
}
// clear
function clearLocalStrogeHandler() {
  localStorage.clear();
}
