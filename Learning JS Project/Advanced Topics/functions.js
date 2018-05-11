// closures
const first = () => {
	const greet = 'Hi';
	const second = () => alert(greet);
	return second;
}

const newFunc = first();
newFunc();



// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);



// compose
const compose = (f, g) => (a) => f(g(a));
const addOne = (num) => num + 1;
compose(addOne, addOne)(5);



// Avoiding side effects, and functional purity
let a = 1;
const b = () => a = 2; // side effect; affecting outside func scope
b();
console.log(a);