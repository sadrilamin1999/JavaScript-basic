const promise = new Promise((resolve, reject) => {
  let completedPromise = false;
  if (completedPromise) {
    resolve("Promise completed");
  } else if (!completedPromise) {
    reject("Promise is not completed");
  }
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
