let myDiv = document.getElementById("my-div");
// creaate element
const heading3 = document.createElement("h1");
heading3.innerHTML = "Heading three";
myDiv.appendChild(heading3);

// remove element
const heading2 = document.getElementsByTagName("h1")[1];
console.log(heading2);
myDiv.removeChild(heading2);
