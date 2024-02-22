let RandomNum = parseInt(Math.floor(Math.random() * 100 + 1));

const userinput = document.querySelector("#guessfield");
const subt = document.querySelector("#subt");
const guesses = document.querySelector(".guess");
const remainguess = document.querySelector(".lastresult");
const lowhi = document.querySelector(".loworhi");
const result = document.querySelector(".result");

const p = document.createElement("P");

playGame = true;
attempts = 1;
prevguess = [];

if (playGame) {
	subt.addEventListener("click", function (e) {
		e.preventDefault();
		const guess = parseInt(userinput.value);
		console.log(guess);
		validateGuess(guess);
	});
}

function validateGuess(guess) {
	if (isNaN(guess)) {
		alert("please enter a Valid Number");
	} else if (guess > 100) {
		alert("please enter a Valid Number");
	} else if (guess < 1) {
		alert("please enter a Valid Number");
	} else {
		prevguess.push(guess);
		if (attempts === 10) {
			displayGuess(guess);
			displayMessage(`Game Over. the Random Number was ${RandomNum}`);
			endGame();
		} else {
			displayGuess(guess);
			checkGuess(guess);
		}
	}
}
function checkGuess(guess) {
	if (guess === RandomNum) {
		displayMessage("you guessed it right");
		endGame();
	} else if (guess < RandomNum) {
		displayMessage("the number is toooo high!");
	} else if (guess > RandomNum) {
		displayMessage("the number is toooo low!!");
	}
}
function displayGuess(guess) {
	userinput.value = "";
	guesses.innerHTML += `${guess} ,`;
	attempts++;
	remainguess.innerHTML = `${10 - attempts + 1}`;
}
function displayMessage(message) {
	lowhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
	userinput.value = "";
	userinput.setAttribute("disabled", "");
	p.classList.add("button");
	p.innerHTML = `<h2 style="cursor: pointer" id="newGames">Start New Game</h2> `;
	result.appendChild(p);
	playGame = false;
	newGame();
}
function newGame() {
	const newgamebutton = document.querySelector("#newGames");
	newgamebutton.addEventListener("click", function (e) {
		RandomNum = parseInt(Math.floor(Math.random() * 100 + 1));
		prevguess = [];
		attempts = 1;
		guesses.innerHTML = "";
		lowhi.innerHTML = "";
		remainguess.innerHTML = `${11 - attempts}`;
		userinput.removeAttribute("disabled");
		result.removeChild(p);
		playGame = true;
	});
}
