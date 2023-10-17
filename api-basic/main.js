/* const ul = document.getElementById("ul");
const submitBtn = document.getElementById("submit-btn");
const submitHandler = () => {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const id = document.getElementById("id").value;
  postToSurver(title, body, id);
};
submitBtn.addEventListener("click", () => submitHandler());

const postToSurver = (title, body, id) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => displayPost(data));
};
function displayPost(post) {
  const li = document.createElement("li");
  li.textContent = `Title: ${post.title}, Body: ${post.body}, User ID: ${post.userId}`;
  ul.appendChild(li);
} */

const ul = document.getElementById("ul");
const submitBtn = document.getElementById("submit-btn");
const submitHandler = () => {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const id = document.getElementById("id").value;
  postToServer(title, body, id);
};
submitBtn.addEventListener("click", submitHandler);

const postToServer = (title, body, id) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userId: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => displayPost(data));
};

function displayPost(post) {
  const li = document.createElement("li");
  li.textContent = `Title: ${post.title}, Body: ${post.body}, User ID: ${post.userId}`;
  ul.appendChild(li);
}
