// // console.log("hey this is abhijeet")
// // console.log("this is abhijeet again")
// // console.log("hey abhijeet are you feeeling good")
// // console.log("hey abhijeet pass me the water")

// // function nice(name){
// //     console.log("hey this is " + name )
// //     console.log("this is "  + name + " again")
// //     console.log("hey " + name + " are you feeeling good")
// //     console.log("hey " + name +  " pass me water")

// // }
// // nice("batman")

// // // function sum(a ,b , c){
// // //     // console.log( a + b );
// // //     return a + b + c
// // // }

// // // result = sum(2 ,3 ,9);
// // // console.log("the sum of these numbers are :", result)

// // const sum = (a , b) =>{
// //    let c = a + b;
// //    return c;
// // }
// // let d = sum(5,5)
// // console.log(d);

// f = Math.random() <0.5;
// console.log(f);

// function Myfunction() {
//     console.log("abhijeet sarkar")
//     console.log("we are learning about functions....")
// }
// Myfunction();

// const mul = (x, y) => {
//     return x * y;
// }
// let a = mul(4,6)
// console.log(a);

// vow = ['a', 'e', 'i', 'o', 'u']
// function vowels(string) {
//     let count = 0
//     for (const i of string) {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
//             count++;
//         }
//     }

//     return count;
// }

// const vowel = (string) =>{
//     let count = 0
//     for (const i of string) {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//             count++;
//         }
//     }

//     return count;
// }

// function arrayvowels (string){
//     let arr = ['a', 'e', 'i', 'o', 'u']

// }

// let num = [234, 522, 455, 72, 653, 82, 91]
// let calsquare = (i) => {
//     console.log(i ** 2)
// };

// num.forEach(calsquare)

// let newarr = num.map((i) => {
//     return i **2 ;
// })
// console.log(newarr)

// let num = [89,67,93,99,87];

// let newarray = num.filter((i) => {
//     return i > 85;
// });

// console.log(newarray);

// let userinput = prompt("Enter your number :");

// let array = [];

// for (let i = 1; i <= userinput; i++) {
//     array[i - 1] = i;
// }

// console.log(array);
// // const array = [1,2,3,4,5]

// const sum = array.reduce((pvalue,currentvalue) => {
//     return pvalue + currentvalue;
// })
// console.log("sum =" ,sum);

// const facto = array.reduce((pvalue,currentvalue) => {
//     return pvalue * currentvalue;
// })
// console.log(facto);
// let userinput = prompt("Enter your number :");

// function factorial(userinput) {

//     if (userinput == 1 || userinput == 0)
//         return 1;

//     else {
//         let result = 1;
//         for (let i = 2; i <= userinput; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// console.log(factorial(5));

// let a = prompt("enter your number for factorial :")
// let a = parseInt(prompt("Enter a number:"));
// function facto(n) {
// 	let arr = Array.from(Array(n + 1).keys());
// 	console.log(arr.slice(1));
// 	let c = arr.slice(1).reduce((a, b) => {
// 		return a * b;
// 	});
// 	console.log(c);
// }
// facto(a);



function multiplyby5(num){
	return num*5	
}

console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

