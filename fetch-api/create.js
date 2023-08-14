// Creationg a resource - post
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    title: "Mango",
    body: "food",
    id: 1,
  }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
