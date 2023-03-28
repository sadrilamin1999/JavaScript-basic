const makeRequest = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const message = `Error: ${res.status}`;
    throw new Error(message);
  }

  const data = await res.json();
  return data;
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
getData();
