function palindrom(word) {
	let palindromWord = "";

	for (let i = word.length - 1; i >= 0; i--) {
		palindromWord += word[i];
	}
	return palindromWord === word;
}

let a = palindrom("racecar");
console.log(a);
let arr = ["bob" , "racecar", "kajak", "level","abhijeet"];

let palindromARRAY = []

arr.forEach(function(word){
    if(palindrom(word)){
        palindromARRAY.push(word)
    }
})

console.log(palindromARRAY);