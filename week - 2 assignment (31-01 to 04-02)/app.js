window.onload = () => {
	const form1 = document.querySelector("#addTask");

	let tasks = document.getElementById("tasks");
	let submit = document.getElementById("submit");

	let editTask = null;

	form1.addEventListener("submit", addTask);
	tasks.addEventListener("click", removeTask);
};

function addTask(e) {
	e.preventDefault();

	if (submit.value != "Submit") {
		editTask.target.parentNode.childNodes[0].data
			= document.getElementById("task").value;
		submit.value = "Submit";
		setTimeout(function() {
			alert("Task edited successfully")
		}, 400);
		return false;
	}

	let newTask = document.getElementById("task").value;
	if (newTask.trim() == "" || newTask.trim() == null)
		return false;
	else
		document.getElementById("task").value = "";

	let li = document.createElement("li");
	li.className = "tasks";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		"deletebtn";

	deleteButton.appendChild(document.createTextNode("Delete"));

	let editButton = document.createElement("button");

	editButton.className =
			"editbtn";

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newTask));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	tasks.appendChild(li);
}

function removeTask(e) {
	e.preventDefault();
	if (e.target.classList.contains("deletebtn")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			tasks.removeChild(li);
			setTimeout(function() {
				alert("Task deleted successfully")
			}, 400);
		}
	}
	if (e.target.classList.contains("editbtn")) {
		document.getElementById("task").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editTask = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}
