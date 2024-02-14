// let btn1 = document.querySelector('#btn1');
// btn1.onclick = (evt) => {
//     console.log(evt)
//    console.log(evt.type);
//    console.log(evt.target)
// }

// let div1 = document.querySelector('div');
// div1.onmouseover = () =>{
//     console.log("hovering!!!!!")
// }

// let btn1 = document.querySelector('#btn1');

// btn1.addEventListener('click', () => {
//     console.log("btn1 was clicked! 1")
// })
// btn1.addEventListener('click', () => {
//     console.log("its clicking 2")
// })
// const handler2 = () => {
//     console.log("btn1 was clicked! 3")
// };
// btn1.addEventListener('click', (handler2))
// btn1.addEventListener('click', () => {
//     console.log("its clicking 4")
// })

// btn1.removeEventListener("click", handler2)

let btn1 = document.querySelector('.btn')
let currMode = 'light'
let body = document.querySelector('body')
btn1.addEventListener("click", () => {
    if (currMode === 'light') {
        currMode = 'dark'
        body.classList.add("dark")
        body.classList.remove("white")
    }
    else {
        currMode = ('light')
        body.classList.add("white")
        body.classList.remove("dark")
    }
    console.log(currMode)
});