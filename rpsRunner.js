function computerPlay() {
	let randomNum = random(0, 3)
	if (randomNum === 0) {
		return "rock"
	} else if (randomNum === 1) {
		return "paper"
	} else {
		return "scissors"
	}
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase()
	if (playerSelection === computerSelection) {
		return "It's a tie!"
	} else if (playerSelection === "rock") {
		if (computerSelection === "scissors") {
			return "You Win! Rock beats Scissors"
		}
		if (computerSelection === "paper") {
			return "You Lose... Paper beats Rock"
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			return "You Win! Paper beats Rock"
		}
		if (computerSelection === "scissors") {
			return "You Lose... Scissors beats Paper"
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			return "You Lose... Rock beats Scissors"
		}
		if (computerSelection === "paper") {
			return "You Win! Scissors beats Paper"
		}
	}
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function game() {
	for (let i = 0; i < 5; i++) {
		let computerInput = computerPlay()
		console.log(`DEBUG - ${computerInput}`)
		let playerInput = prompt("Please enter Rock, Paper, or Scissors: ")
		console.log(playRound(playerInput, computerInput))
	}
}

game()
