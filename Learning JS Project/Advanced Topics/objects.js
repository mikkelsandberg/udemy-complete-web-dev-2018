// reference type
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};



// context
const object4 = {
	a: function() {
		console.log(this);
	}
}



// instantiation
class Player {
	constructor(name, type) {
		console.log('player', this);
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi, I am ${this.name}. I am a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log('wizard', this);
	}

	play() {
		console.log(`WEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Mikkel', 'Spell Slinger');
const wizard2 = new Wizard('Bob', 'Healer');