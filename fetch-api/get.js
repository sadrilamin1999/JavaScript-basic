// get all resources
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
