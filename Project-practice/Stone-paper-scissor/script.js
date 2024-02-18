let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".c");
const msg = document.querySelector(".turn");
const userscore = document.querySelector("#userscore");
const compscore = document.querySelector("#compscore");
const btn = document.querySelector('.btn');
const sb = document.querySelector('.scoreboard');
const msg1 = document.querySelector('.msg');


const resetgame = () => {
	
	user = 0;
	comp = 0;
	userscore.innerText = user;
	compscore.innerText = comp;
	msg.innerText = 'Play your move';
	msg.style.backgroundColor = "white"
	save();
	

}

const showWinner = (userwin, choiceID, computer) => {
	if (userwin) {
		user++;
		userscore.innerText = user;
		msg.innerText = `You win! , ${choiceID} beats ${computer}`;
		msg.style.backgroundColor = "#B6EEA6";
	} else {
		comp++;
		compscore.innerText = comp;
		console.log("You lose, better luck next time");
		msg.innerText = `You lose, ${computer} beats ${choiceID}`;
		msg.style.backgroundColor = "#FE5F55";
	}
};

const compchoice = () => {
	const compoptions = ["rock", "paper", "scissors"];
	const randidx = Math.floor(Math.random() * 3);
	return compoptions[randidx];
};

const drawgame = () => {
	msg.innerText = "game was draw";
	msg.style.backgroundColor = "white";
};

const playgame = (choiceID) => {
	// console.log("user choiced =", choiceID);
	//generate choice choice
	const computer = compchoice();
	console.log("computer choice : ", computer);

	if (choiceID === computer) {
		drawgame();
	} else {
		let userwin = true;
		if (choiceID === "rock") {
			userwin = computer === "paper" ? false : true;
		} else if (choiceID === "paper") {
			userwin = computer === "scissors" ? false : true;
		} else {
			userwin = computer === "rock" ? false : true;
		}
		showWinner(userwin, choiceID, computer);
		// save();
	}
};

choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const choiceID = choice.getAttribute("id");
		console.log("clicked", choiceID);
		playgame(choiceID);
		save()
	});
});
btn.addEventListener('click', resetgame);

function save() {

	const data = {
		user: user,
		comp: comp,
		msg: msg.innerText
	}
	localStorage.setItem("data", JSON.stringify(data));
}

const show = () => {
	const data = JSON.parse(localStorage.getItem("data"))

	if (data) {
		user = data.user;
		comp = data.comp;
		userscore.innerText = user;
		compscore.innerText = comp;
		msg.innerText = data.msg;
	}
}


show();
