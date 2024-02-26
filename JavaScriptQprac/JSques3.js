// function prime_numbers(n) {
// 	if (n === 1) {
// 		return false;
// 	} else if (n === 2) {
// 		return true;
// 	} else {
// 		for (let i = 2; i < n; i++) {
// 			if (n % i === 0) {
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }

// console.log(prime_numbers(48));
//.........................................................................
// function copy() {
// 	console.log("lets go");
// }
// function type(value) {
// 	if (typeof value === "function") {
// 		return "function";
// 	}
// 	return typeof value;

// }

// console.log(type(copy));

// function matrix(n) {

// 	for (let i = 0; i < n; i++) {
// 		let row = "";
// 		for (let j = 0; j < n; j++) {
// 			if (i === j) {
// 				row += "1 ";
// 			} else {
// 				row += "0 ";
// 			}
// 		}
// 		console.log(row);
// 	}
// }

// matrix(4);
//................................................................

/* function design(n) {
	let str = "";
	for (let i = 0; i <= n; i++) {
		for (let j = 0; j < i; j++) {
			str += "*";
		}
        
		str += "\n";
	}
	console.log(str);
}
design(5);
 */

function greatestNum(arr) {
	arr.sort(function (a, b) {
		return a - b;
	});

	unique = [arr[0]];
	result = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] !== arr[i]) {
			unique.push(arr[i]);
		}
	}
	result.push(unique[1], unique[unique.length - 2]);

	return result.join(",");
}

console.log(greatestNum([1, 2, 3, 4, 5, 6]));
