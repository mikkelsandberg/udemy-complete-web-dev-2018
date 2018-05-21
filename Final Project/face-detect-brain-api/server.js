const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = {
	users: [
		{
			id: '1',
			name: 'Mikkel',
			email: 'mikkel@gmail.com',
			password: 'supersecret',
			entries: 0,
			joined: new Date()
		},
		{
			id: '2',
			name: 'Erik',
			email: 'erik@gmail.com',
			password: 'coolbeans',
			entries: 0,
			joined: new Date()
		}
	]
};

app.get('/', (req, res) => {
	res.json(db.users);
});

app.post('/signin', (req, res) => {
	if (req.body.email === db.users[0].email && req.body.password === db.users[0].password) {
		res.json(db.users[0]);
	} else {
		res.status(400).json('error logging in');
	}
});

app.post('/register', (req, res) => {
	const { email, name, password } = req.body;

	db.users.push({
		id: '3',
		name: name,
		email: email,
		entries: 0,
		joined: new Date()
	});

	res.json(db.users[db.users.length - 1]);
});

app.get('/profile/:id', (req, res) => {
	const { id } = req.params;
	let found = false;

	db.users.forEach(user => {
		if (user.id === id) {
			found = true;
			return res.json(user);
		}
	});

	if (!found) {
		res.status(404).json('user does not exist');
	}
});

app.put('/image', (req, res) => {
	const { id } = req.body;
	let found = false;

	db.users.forEach(user => {
		if (user.id === id) {
			found = true;
			user.entries++;
			return res.json(user.entries);
		}
	});

	if (!found) {
		res.status(404).json('user does not exist');
	}
});

app.listen(4000, () => {
	console.log('app is running on port 4000');
});
