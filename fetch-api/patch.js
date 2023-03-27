fetch("https://jsonplaceholder.typicode.com/posts/1", {
  // patch update a single data
  method: "PATCH",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    title: "food pagla",
  }),
})
  .then((res) => {
    if (!res.ok) {
      const message = `Error: ${res.status}`;
      throw new Error(message);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
