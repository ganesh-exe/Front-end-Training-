const status = true;
function success() {
  console.log("the promise is fulfilled");
}
function fail() {
  console.log("the promise is fulfilled");
}
let prom1 = new Promise((resolve, reject) => {
  if (status) {
    setTimeout(success, 4000);
    resolve(success);
  } else {
    reject(fail);
    setTimeout(fail, 4000);
  }
});
console.log(prom1);
