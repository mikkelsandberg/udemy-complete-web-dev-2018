const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const port = 4000;

const register = require('./Controllers/register');
const signIn = require('./Controllers/signIn');
const profile = require('./Controllers/profile');
const image = require('./Controllers/image');

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: '',
		password: '',
		database: 'smart-brain'
	}
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json(db.users);
});

app.post('/signin', signIn.handleSignIn(db, bcrypt));

app.post('/register', register.handleRegister(db, bcrypt));

app.get('/profile/:id', profile.handleProfileGet(db));

app.put('/image', image.handleImage(db));

app.post('/imageUrl', image.handleApiCall());

app.listen(port, () => {
	console.log(`app is running on port ${port}`);
});
