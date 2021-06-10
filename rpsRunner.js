let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	let randomNum = random(0, 3);
	if (randomNum === 0) {
		return "rock";
	} else if (randomNum === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	const results = document.querySelector(".resultsContainer > h3");
	if (playerSelection === computerSelection) {
		results.textContent = "It's a tie!";
	} else if (playerSelection === "rock") {
		if (computerSelection === "scissors") {
			results.textContent = "You Win! Rock beats Scissors";
			playerScore += 1;
		}
		if (computerSelection === "paper") {
			results.textContent = "You Lose... Paper beats Rock";
			computerScore += 1;
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			results.textContent = "You Win! Paper beats Rock";
			playerScore += 1;
		}
		if (computerSelection === "scissors") {
			results.textContent = "You Lose... Scissors beats Paper";
			computerScore += 1;
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			results.textContent = "You Lose... Rock beats Scissors";
			computerScore += 1;
		}
		if (computerSelection === "paper") {
			results.textContent = "You Win! Scissors beats Paper";
			playerScore += 1;
		}
	}
	updateScores();
}


function updateScores() {
	const pScore = document.querySelector("#playerScore");
	const cScore = document.querySelector("#computerScore");
	const gameOver = document.querySelector("div.gameOver > h1");
	console.log(gameOver);
	if (pScore >= 5 && pScore > cScore) {
		console.log("WIN");
		gameOver.textContent = "Game Over: YOU WIN!";
	} else if (cScore >= 5 && pScore < cScore) {
		gameOver.textContent = "Game Over: YOU LOSE!";
	}
	pScore.textContent = "Player Score: " + playerScore;
	cScore.textContent = "Computer Score: " + computerScore;
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", function () {
	playRound("rock", computerPlay());
});
paperBtn.addEventListener("click", function () {
	playRound("paper", computerPlay());
});
scissorsBtn.addEventListener("click", function () {
	playRound("scissors", computerPlay());
});