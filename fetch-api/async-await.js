const makeRequest = async (url, config) => {
  const res = await fetch(url, config);

  if (!res.ok) {
    const message = `Error: ${res.status}`;
    throw new Error(message);
  }

  const data = await res.json();
  return data;
};

/* // get request
const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
getData(); */

// post request
/* const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
sendData(); */

// update request
/* const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "foo mone",
      body: "bar bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
updateData(); */

// update a single data
/* const updateSingleData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "foo hunter",
    }),
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
updateSingleData(); */

// delete data
const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
deleteData();
