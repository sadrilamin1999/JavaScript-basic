const makeRequest = (req, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(req, url);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onload = () => {
    const data = xhr.response;
    console.log(JSON.parse(data));
  };
  xhr.onerror = () => {
    console.log("There is an error");
  };

  xhr.send(JSON.stringify(data));
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
};
const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};
sendData();
