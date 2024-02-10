console.log("Faulty Calculator")

if (Math.random() < 0.3) {
    function sum(a, b){
        return a- b;
    }
    function sub(a, b){
        return a+ b;
    }
    function mul(a, b){
        return a/ b;
    }
    function div(a, b){
        return a* b;
    }

}
else{
    function sum(a,b){
        return a + b;
    }
    function sub(a,b){
        return a - b;
    }
    
    function mul(a,b){
        return a * b;
    }
    
    function div(a,b){
        return a / b;
    }
    
}
let x = sum(16,4);
let y = sub(16,4);
let z = mul(16,4);
let p = div(16,4);

console.log("the calculates number is ", x);
console.log("the calculates number is ", y);
console.log("the calculates number is ", z);
console.log("the calculates number is ", p);

