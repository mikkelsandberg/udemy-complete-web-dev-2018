// string padding
'turtle'.padStart(10);
'turtle'.padEnd(10);



// trailing comma
const fun = (
							a, 
							b, 
							c, 
							d,
							e,
							) => {
	console.log(a);
}

fun(1,2,3,4,5);



// Object.values & Object.entries
let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr. Grinch'
}

// old way with Object.keys
// Object.keys(obj).forEach((key, index) => {
// 	console.log(key, obj[key]);
// });

// Object.values(obj).forEach(value => {
// 	console.log(value);
// });

// Object.entries(obj).forEach(value => {
// 	console.log(value);
// });

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
});