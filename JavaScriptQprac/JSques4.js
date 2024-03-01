// function prefix(strs) {
// 	if (strs.length === 0) {
// 		return " ";
// 	}

// 	let pre = strs[0];
// 	for (let word of strs) {
// 		while (word.indexOf(pre) !== 0) {
// 			pre = pre.slice(0, -1)
//             if(pre === ' '){
//                 return ''
//             }
// 		}
// 	}
//     return pre
// }

// let a = ['flower', 'flose', 'flare']

// console.log(prefix(a))