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
    .then((json) => console.log(json));
};
