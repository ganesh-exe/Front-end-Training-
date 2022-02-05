const btn = document.getElementById("btn");

function button() {
  alert("Success");
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  button();
});
