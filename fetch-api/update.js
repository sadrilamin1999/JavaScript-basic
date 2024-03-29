// Update a resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    title: "Orange",
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
