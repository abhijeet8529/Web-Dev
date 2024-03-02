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

//2sum
// function twosum(nums, target) {
// 	let maps = new Map();
// 	for (let i = 0; i < nums.length; i++) {
// 		const pair = target - nums[i];
// 		if (maps.has(pair)) return [maps.get(pair), i];
// 		maps.set(nums[i], i);
// 	}
// }

// nums = [2, 7, 4,8, 54, 56];
// console.log(twosum(nums, 12));

//3sum
// let nums = [-1, 0, 1, 2, -1, -4];

// function threesum(nums) {
// 	if (nums === null || nums.length < 3) return [];
// 	nums.sort((a, b) => a - b);
// 	let result = [];

// 	for (let i = 0; i < nums.length - 2; i++) {
// 		if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
// 			let left = i + 1;
// 			let right = nums.length - 1;

// 			while (left < right) {
// 				let sum = nums[i] + nums[right] + nums[left];

// 				if (sum === 0) {
// 					result.push([nums[i], nums[left], nums[right]]);

// 					left++;
// 					right--;
// 				} else if (sum < 0) {
// 					left++;
// 				} else {
// 					right--;
// 				}
// 			}
// 		}
// 	}
// 	return result;
// }
// console.log(threesum(nums));

