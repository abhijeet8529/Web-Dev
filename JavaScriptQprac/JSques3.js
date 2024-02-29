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

// function greatestNum(arr) {
// 	arr.sort(function (a, b) {
// 		return a - b;
// 	});

// 	unique = [arr[0]];
// 	result = [];
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i - 1] !== arr[i]) {
// 			unique.push(arr[i]);
// 		}
// 	}
// 	result.push(unique[1], unique[unique.length - 2]);

// 	return result.join(",");
// }

// console.log(greatestNum([1, 2, 3, 4, 5, 6]));
// a =[1,2,3]
// b = [4,5,6]
// function merge(a,b){
// 	for(i = 0; i< b.length; i++){
// 		a[a.length] = b[i]
// 	}
// 	return a;
// }
// console.log(merge(a,b))

// function remove(num, val1) {
// 	let k = 0
// 	for (i = 0; i < num.length; i++) {
// 		if (num[i] === val1) {
// 			num[k] = num[i];
// 			k++;
// 			return num.filter(item=> item !== val1);
// 		}
// 		return k;
// 	}
// }
// num = [2,3,4,2,2,2,5,6,7]
// val1 = 2
// console.log(remove(num, val1))

// let nums = [1,6,54,3,672,4,5,6,5,5,5]

// function duplicate(nums){
// 	nums.sort((a,b) => a-b);
// 	for(let i = 0 ; i < nums.length; i++){
// 		if(nums[i] === i){
// 			nums[i].pop;
// 		}

// 	};
// 	return nums;
// }

// console.log(duplicate(nums));

function findroman(s) {
	let roman = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let total = 0;
	for (let i = 0; i < s.length; i++) {
		if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
			total -= roman[s[i]];
		} else {
			total += roman[s[i]];
		}
	}
	return total;
}

s = "MCMXCIV";
console.log(findroman(s));
