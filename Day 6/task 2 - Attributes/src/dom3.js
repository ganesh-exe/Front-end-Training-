import "./styles.css";
var parElem = document.getElementById("app");
var childElem2 = parElem.firstElementChild.nextElementSibling;
parElem.setAttribute("class", "par");
parElem.firstElementChild.setAttribute("class", "child");
childElem2.setAttribute("class", "child2");
console.log(childElem2.hasAttribute("id"));
