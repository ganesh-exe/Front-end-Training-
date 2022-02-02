let player = {
  firstname: "Chandler",
  lastname: "Bing",
  age: 30,
  sport: "rugby",
  role: "captain"
};
console.log("properties of object - player:");
for (let key in player) {
  console.log(key, "-", player[key]);
}
let { firstname: fName, lastname: lName } = player;
console.log("After De-structuring properties to fName,lName -", fName, lName);

function restArgs(...args) {
  return args.map((item) => item * 2);
}
console.log("Rest parameter -", restArgs(1, 2, 3, 4));
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1, 5, 6, 7, 8];
console.log("Array 1-", arr1);
console.log("Array 2 with Array 1 elements using spread operator", arr2);
