fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => displayUser(json));

function displayUser(users) {
  const ul = document.querySelector(".users");
  const usersName = users.map((user) => user.username);
  for (let i = 0; i < usersName.length; i++) {
    const user = usersName[i];
    const li = document.createElement("li");
    li.innerText = user;
    ul.appendChild(li);
  }
}
