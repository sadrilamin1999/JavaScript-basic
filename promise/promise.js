// How to create a promise, pending, resolve, reject.
const promise = new Promise((resolve, reject) => {
  let complitedPromise = false;

  if (complitedPromise) {
    resolve("Complited your promise.");
  } else {
    reject(new Error("Not complited your promise."));
  }
});

promise.then((res) => console.log(res));

promise.catch((err) => console.log(err.message));
