const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", function () {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body-content").value;
  const post = { title: title, body: body };
  posteSrver(post);
});

function posteSrver(post) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
