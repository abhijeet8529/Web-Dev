let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.resetbtn')
let newbtn = document.querySelector('.newbtn');
let msg = document.querySelector('.msg')
let msg1 = document.querySelector('.msg1')
let turn0 = true;
let count = 0;

const winpat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turn0 = true;
    count = 0;
    enable();
    msg.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('clicked')
        if (turn0) {
            box.innerText = 'O';
            box.style.color = '#1E96FC'
            turn0 = false;
        } else {
            box.innerText = 'X';
            turn0 = true;
            box.style.color = '#D62246'
        }
        box.disabled = true;
        count++;
        let iswinner = checkwinner();
        if(count === 9 && !iswinner) {
            gameDraw();
        
        }
    })
});

const gameDraw = () => {
    msg1.innerText = "Game was a Draw!";
    msg.classList.remove("hide");
    disable();

}

const disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg1.innerText = `Congratulations, Winner is ${winner}`
    msg.classList.remove("hide");
    disable();
}

const checkwinner = () => {
    for (let pattern of winpat) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != '' && pos2val != '' && pos3val != '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                disable();
                showWinner(pos1val);
            }
        }
    }
};



newbtn.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)