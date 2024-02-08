// var a= 20;
// var b= 20;

// console.log(a+b);

// var a = 6;    //local variable
let a= 6;         //global variable
a = a + 6
console.log (a);

{
    let a = 6;
    console.log(a);
}

//premitive datatypes

let x = "abhijeet";
let y = 20;
let z= 4.6;
const p = true;
let q = undefined;
let r = null;

console.log (
    x,y,z,p,q,r
)
console.log (
    typeof x,typeof y,typeof z,typeof p,typeof q,typeof r
);


//objects

let o = {
    name: "abhijeet",
    age: 18,
    place: "jaipur",
    pincode: 302021
}
console.log(o);

o.salary = "32000Rs" ;
console.log(o);
