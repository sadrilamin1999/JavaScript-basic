fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((res) => console.log(res));
