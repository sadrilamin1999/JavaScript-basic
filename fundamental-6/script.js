const lis = document.querySelectorAll("li");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    console.log(li.textContent);
  });
});
