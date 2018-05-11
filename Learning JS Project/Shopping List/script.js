var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll(".delete");
var debug = false;

function inputLength() {
	return input.value.length;
}

function checkTagName(el, target) {
	return el.target.tagName.toUpperCase() === target;
}

function createListElement() {
	var li = document.createElement("li");
	var delButton;
	li.appendChild(document.createTextNode(input.value));
	delButton = li.appendChild(document.createElement("button"));
	delButton.appendChild(document.createTextNode("Delete"));
	delButton.classList = "delete";
	delButton.addEventListener("click", deleteItem);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	if (checkTagName(event, "LI"))
		event.target.classList.toggle("done");
}

function deleteItem(event) {
	if (debug) { console.log(event); }
	if (checkTagName(event, "BUTTON"))
		if (debug) { console.log(event.target.parentElement); }
		event.target.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

listItems.forEach(function(item) {
	item.addEventListener("click", toggleDone);
});

deleteButtons.forEach(function(item) {
	item.addEventListener("click", deleteItem);
});