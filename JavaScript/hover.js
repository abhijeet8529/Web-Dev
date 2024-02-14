let hover = document.querySelector('.hover');

let body = document.querySelector('body');
let curr = "off"
hover.addEventListener('mouseover', () =>{
    if(curr == 'off'){
        console.log("hovering");
        body.classList.add("img")
        curr = "on"
    }
   
})
hover.addEventListener('mouseout', () => { // Added mouseout event listener to handle when the mouse leaves the element
    if (curr === 'on') { // Condition to remove class only if it was previously added
        body.classList.remove("img");
        curr = "off"; // Update the state
    }
});