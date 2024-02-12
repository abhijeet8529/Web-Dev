// let marks = [ 2,3,4,6,7,23]
// let heroes = ["iron man", "hulk", "groot", "Batman"]
// heros[4] = "spiderman"

// for(let i = 0; i < heroes.length ; i++){
//     console.log(heroes[i])
// }


// for(let i of heroes){
//     console.log(i)          //for of loop
// }

// let cities = ["jaipur","mumbai","delhi","chandigarh","nagpur"]

// for(let city of cities){
//     console.log(city.toLowerCase())
// 
// marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let mark of marks) {
//     sum += mark;
    
// }
// average = sum / marks.length
// console.log(average)
// let i = 0;
let prices = [250,645,300,900,50]
// for(let value of prices){
//     console.log(`the value of items ${i} = ${value}`)
//     let offer = value / 10;
//     prices[i] = prices[i] - offer;
//     console.log(`the value of items ${i} after discount is: ${prices[i]}`);
//     i++;
// }


// for (let i =0 ; i< prices.length; i++){
//     let offer = prices[i] / 10
//     prices[i] -= offer;

// }

// console.log(prices)

// let veggies = ["tomato", "cheese","lichi","eggplant"]
// let fruits = ["orange","apple", "gauva","banana"]
// let junkfood = ["momos","rools","chowmein"]
// veggies.push("potato")
// console.log(veggies)
// veggies.pop("tomato")
// console.log(veggies)
// console.log(veggies.toString())
// let food = fruits.concat(veggies,junkfood)
// console.log(food)
// veggies.shift("tomato")

// let heroes = [ "thor","iron man","spiderman","antman"]
// // console.log(heroes)
// // console.log(heroes.slice(1,3))

// // console.log(heroes.splice(2,3,"deadpool","batman")) //replace element
// heroes.splice(3,0,"shaktiman","krrish")
// console.log(heroes)   //add element


// heroes.splice(0,1)       //delete element
// console.log(heroes)

// let arr = [1,2,4,9,5,6,7]

// a= arr.splice(3,1);
// console.log(a)
// console.log(arr)

let companies = ["Bloomberg", "Microsoft", "Uber","Google", "IBM","Netflix"]
// companies.shift("Bloomberg")
// companies.splice(0,1)
companies.splice(2,1,"Ola")
companies.push("Amazon")
console.log(companies)