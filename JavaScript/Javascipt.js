// function Twodarray(a) {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a[0].length; j++) {
//             console.log(a[i][j]);
//         }
//     }
// }
// var a = [[1, 2],
// [3, 4],
// [5, 6],
// [7,8]];
// Twodarray(a)
// console.log(a.length);

// function deletearray(arr, elem) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == elem) {
//             arr.splice(i, 1)
//         }
//     }
//     return arr;
// }
// let arr=[3,4,5,7,8,9,10]

// deletearray(arr, 8)
// console.log(arr);mn
// let res = 1
// function power(num, pow) {
//     for (let i = 0; i < pow; i++) {
//         res = res * num;
//     }
//     return res;
// }
// console.log(power(3,6))


// function pattern(num){
//     for(let i = 1; i <=num; i++){
//         let str = ''
//         for(let j = 1; j<=i; j++){
//             str += j+ " "

//         }
//         console.log(str)
//     }

// }
// pattern(9)
// let count = 0;
// function digits(num){
//     while(num!=0){
//         num = Math.floor(num/10);
//         count++;
//     }
//     return count;
// }
// console.log(digits(4567))]

// function sumnum(num) {
//     let sum = 0;
//     while (num != 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }
// console.log(sumnum(12345))

// arr = [3, 5, 6, 33, 45, 656, 674, 23, 1198]
// largest = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     largest = arr[i] > largest ? arr[i] : largest;
// }
// console.log(largest);

let arr = [[0, 1, 1], [0, 1, 0], [1, 0, 0]];
let zeroes = 0
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        zeroes = arr[i][j] == 0 ? zeroes + 1 : zeroes;
    }
}
console.log(zeroes)