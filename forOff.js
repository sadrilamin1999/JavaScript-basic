const names = ["Sadril", "Amin", "Shuvo"];
for (const name of names) {
  console.log(name);
}

function foo(...agruments) {
  for (const value of agruments) {
    console.log(value);
  }
}
foo(1, 2, 3, 4, 5, 6);
