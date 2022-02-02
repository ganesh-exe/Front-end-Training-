
let sentence = "Good morning everyone";
console.log("String 1 -", sentence);
let splitarr = sentence.split(" ");
console.log("Split method -", splitarr);
let joinarr = splitarr.join(" ");
console.log("Join method -", joinarr);

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [100, 200, 300, 400];
let array3 = [10, 20, 30, 40];
console.log("Array1 -", array1);
let evenarr = array1.filter((item) => item % 2 === 0);
console.log("Filtered array with even num-", evenarr);
let oddarr = array1.filter((item) => item % 2 !== 0);
console.log("Filtered array with odd num-", oddarr);
console.log("Array 2-", array2);
let maparr = array2.map((item) => item * 2);
console.log("Map method -", maparr);
let reducearr = array3.reduce(function (result, item) {
  return result + item;
});
console.log("Array 3-", array3);
console.log("Reduce method-", reducearr);
