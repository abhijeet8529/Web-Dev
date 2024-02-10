console.log("------- Business name generator -------------")

let random = Math.random()

if (random < 0.20) {
    first = "crazy"

}
else if (random < 0.60 && random > 0.20) {
    first = "amazing"
}
else {
    first ="fire"
}
if (random < 0.20) {
    second = "Engine"

}
else if (random < 0.60 && random > 0.20) {
    second = "Food"
}
else {
    second ="Garments"
}
if (random < 0.20) {
    third = "Bros"

}
else if (random < 0.60 && random > 0.20) {
    third = "Limited"
}
else {
    third ="Hub"
}



console.log(`${first} ${second} ${third}`)