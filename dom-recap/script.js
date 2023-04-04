//  create element
const div = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.innerText = "This is frist";
p2.innerHTML = `
<span>This is</span>
<span>Second</span>
`;

document.body.appendChild(div);
div.appendChild(p1);
div.appendChild(p2);

// event handler
const btns = document.querySelectorAll(".btn");
btns.forEach((e) => {
  e.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
  });
});
