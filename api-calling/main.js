const makeRequest = (req, url) => {
  const xhr = new XMLHttpRequest();
  xhr.open(req, url);

  xhr.onload = () => {
    const data = xhr.response;
    console.log(JSON.parse(data));
  };
  xhr.onerror = () => {
    console.log("There is an error");
  };

  xhr.send();
};

const getDaata = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
};

getDaata();
