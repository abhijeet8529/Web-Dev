// let today = new Date();

// let dd = today.getDate();
// let mm = today.getMonth();
// let yy = today.getFullYear();

// console.log(`${mm}-${dd}-${yy}`);

// function rotate(str) {
// 	let newstr = "";
// 	for (let i = 1; i < str.length; i++) {

// 	}

// 	return newstr;
// }

// let a = rotate("w3school");
// console.log(a);

function merger(ar1, ar2) {
	let ar = [];

	for (let i of ar1) {
		ar.push(i);
	}
	for (let i of ar2) {
		ar.push(i);
	}
    return ar;
}
ar1 = [22,33,44,55]
ar2 = [66,77,88,99]
let a = merger(ar1, ar2)
console.log(a);