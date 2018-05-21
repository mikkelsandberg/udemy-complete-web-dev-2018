const fs = require('fs');

const inputFile = fs.readFileSync('./input.txt', (err, data) => {
	if (err) {
		console.log(err);
		return;
	} else {
		return data;
	}
});
const directions = inputFile.toString();

function calcEndReduce(directions) {
	console.time('runtime-calcEndReduce');
	const arr = directions.split('');
	const answer = arr.reduce((acc, curr) => {
		if (curr === '(') {
			return (acc += 1);
		} else {
			return (acc -= 1);
		}
	}, 0);
	console.log('floor', answer);
	console.timeEnd('runtime-calcEndReduce');
}

function calcEnd(directions) {
	console.time('runtime-calcEnd');
	let count = 0;
	for (let i = 0; i < directions.length; i++) {
		directions[i] === '(' ? count++ : count--;
	}
	console.log('ends at floor:', count);
	console.timeEnd('runtime-calcEnd');
}

function calcBasement(directions) {
	console.time('runtime-calcBasement');
	let count = 0;
	for (let i = 0; i < directions.length; i++) {
		if (directions[i] === '(') {
			count++;
		} else if (directions[i] === ')') {
			count--;
			if (count < 0) {
				console.log('in basement at:', i + 1);
				break;
			}
		}
	}
	console.timeEnd('runtime-calcBasement');
}

function question1() {
	fs.readFile('./input.txt', (err, data) => {
		console.time('runtime-question1');
		const directions = data.toString();
		const dirArr = directions.split('');
		const answer = dirArr.reduce((acc, curr) => {
			if (curr === '(') {
				return (acc += 1);
			} else {
				return (acc -= 1);
			}
		}, 0);
		console.log('floor:', answer);
		console.timeEnd('runtime-question1');
	});
}

question1();
