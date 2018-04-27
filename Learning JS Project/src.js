var database = [
	{
		username: "Mikkel",
		password: "secret"
	},
	{
		username: "Sally",
		password: "1234"
	},
	{
		username: "Ingrid",
		password: "hellooo"
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired lol"
	},
	{
		username: "Sally",
		timeline: "This place is awesome!"
	}
];

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username &&
			  database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and/or password!");
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);