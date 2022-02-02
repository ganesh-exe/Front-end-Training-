function oddoreven(a) {
  while (a === 0) {
    return console.log("Enter another number");
  }
  if (a % 2 === 0) {
    return console.log("even");
  } else {
    return console.log("odd");
  }
}
oddoreven(10);
oddoreven(5);
oddoreven(0);
