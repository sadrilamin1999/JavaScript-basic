const makeRequest = (method, url, data) => {
  const xml = new XMLHttpRequest();
  xml.open(method, url);

  xml.setRequestHeader("Content-type", "application/json");

  xml.onload = () => {
    const data = xml.response;
    console.log(JSON.parse(data));
  };
  xml.onerror = () => {
    console.log("error is here");
  };
  xml.send(JSON.stringify(data));
};
const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
};
const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts"),
    {
      title: "foo",
      body: "bar",
      userId: 1,
    };
};
sendData();
