
var par = document.getElementById("app");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function () {
  par.classList.add("class1");
});
btn1.addEventListener("mouseover", function () {
  var msg1 = document.createElement("p");
  msg1.textContent = "Your mouse is on button1";
  par.appendChild(msg1);
});
btn1.addEventListener("mouseout", function () {
  par.removeChild(par.lastChild);
});

btn2.addEventListener("click", function () {
  par.classList.add("class2");
});
btn2.addEventListener("mouseover", function () {
  var msg2 = document.createElement("p");
  msg2.textContent = "Your mouse is on button2";
  par.appendChild(msg2);
});
btn2.addEventListener("mouseout", function () {
  par.removeChild(par.lastChild);
});

btn3.addEventListener("click", function () {
  par.classList.add("class3");
});
btn3.addEventListener("mouseover", function () {
  var msg3 = document.createElement("p");
  msg3.textContent = "Your mouse is on button3";
  par.appendChild(msg3);
});
btn3.addEventListener("mouseout", function () {
  par.removeChild(par.lastChild);
});
