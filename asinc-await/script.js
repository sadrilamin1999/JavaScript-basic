const id = document.getElementById("container");
const makeRequest = async (url, config) => {
  const res = await fetch(url, config);

  if (!res.ok) {
    const message = `Error: ${res.status}`;
    throw new Error(message);
  }

  const data = await res.json();
  return data;
};

// get request
const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((datas) =>
      datas.map((data) => {
        const p = document.createElement("p");
        p.innerText = data.title;
        id.appendChild(p);
      })
    )
    .catch((error) => console.log(error));
};
getData();
