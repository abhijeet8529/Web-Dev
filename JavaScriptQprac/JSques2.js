// function diff(n) {
// 	if (n <= 13) {
// 		return 13 - n;
// 	} else {
// 		return (n - 13) * 2;
// 	}
// }
// console.log(diff(15));
// sum = 0;
// function calc(a, b) {
// 	if (a != b) {
// 		return sum += a + b;
// 	} else if(a === b) {

// 		return 3 * (a + b)
// 	}

// }
// console.log(calc(34, 34));
//...................................................................................
// function validate(num) {
// 	if (!Number.isInteger(num)) {
// 		throw new Error("invalid number");
// 	}
// 		console.log("number is valid", num);
// 	}

// try {
// 	validate(12);
// 	validate(12.89);
// } catch (error) {
// 	console.log("Error", error.message);
// }
//...................................................................................
// let newNum  = '';

// function reverse(num){
//     num = num + ""
//     let Rev =num.split("").reverse().join("");
//     newNum += Rev;
//     return newNum;
// }
// console.log(reverse(23456))
//...................................................................................
// let palindrom = "";
// function palin(word) {
// 	for (let i = word.length - 1; i >= 0; i--) {
// 		palindrom = +word[i];
// 	}
// 	if (palindrom === word) {
// 		console.log("Word is a Palindrom");
// 	} else {
// 		console.log("Word is NOT a Palindrom");
// 	}
// }
// palin("abhijeet")
//...................................................................................
// function combinations(str) {
// 	let result = [];

// 	function helper(start, combo) {
// 		if (combo != "") {
// 			result.push(combo);
// 		}

// 		for (let i = start; i < str.length; i++) {
// 			helper(i + 1, combo + str[i]);
// 		}

// 	}
//     helper(0, "");
// 	return result;
// }

// const InputStr = "sarkar";
// const Combos = combinations(InputStr);
// console.log(Combos.join(','));
//...................................................................................
// let Rstr = ""
// function sorted(str){
//     for(let i = 0; i < str.length; i++){
//         Rstr += str[i];
//     }
//     return Rstr.split('').sort().join('');
// }

// console.log(sorted("acdbegfijkhl"))
//...................................................................................
// function upper(str) {
// 	let words = str.split(" ");
// 	for (let i = 0; i < words.length; i++) {
// 		let word = words[i];

// 		words[i] = word.charAt(0).toUpperCase() + word.slice(1);
// 	}
// 	return words.join(" ");
// }
// let a = "the world is so beautiful";
// console.log(upper(a));
//...................................................................................
// function longest_word(str) {
// 	let words = str.split(" ");
// 	let newWord = "";

// 	for (let i = 0; i < words.length; i++) {
// 		if (words[i].length > newWord.length) {
// 			newWord = words[i];
// 		}
// 	}
// 	return newWord;
// }
// console.log(longest_word("my name is abhijeet humangasores"));
//...................................................................................

// function find_vowels(str) {
// 	let vowels = "aeiouAEIOU";
// 	let vcount = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		if (vowels.indexOf(str[i]) !== -1) {
// 			vcount += 1;
// 		}
// 	}
// 	return vcount;
// }
// console.log(find_vowels("you know that were the one"));
