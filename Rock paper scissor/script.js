let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

updateScore();


function resetScore() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
  }



function playGame(playermove) {
    const computerMove = computerGame();
    let result = '';
    if (playermove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        }
        else if (computerMove === 'scissors') {
            result = 'Tie';
        }
        else if (computerMove === 'paper') {
            result = 'You win';
        }

    }
    else if (playermove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        }
        else if (computerMove === 'scissors') {
            result = 'You lose';
        }
        else if (computerMove === 'paper') {
            result = 'Tie';
        }
    }
    else if (playermove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        }
        else if (computerMove === 'scissors') {
            result = 'You win';
        }
        else if (computerMove === 'paper') {
            result = 'You lose';
        }
    }

    if (result === 'You win') {
        score.Wins += 1;
    }
    else if (result === 'You lose') {
        score.Losses += 1;
    }
    else if (result === 'Tie') {
        score.Ties += 1;
    }


    localStorage.setItem('score', JSON.stringify(score))
    localStorage.setItem('lastResult', JSON.stringify({
        playerMove: playermove,
        computerMove: computerMove,
        result: result
    }));

    document.querySelector(".js-result").innerHTML = `${result} this round!`
    updateScore();
    document.querySelector(".js-moves").innerHTML = `You pick ${playermove} computer pick ${computerMove}`

    alert(`You pick ${playermove} computer pick ${computerMove}, ${result} this round!
    Wins: ${score.Wins}   Losses: ${score.Losses}   Ties: ${score.Ties}`);

}

function updateScore() {
    document.querySelector(".js-score").innerHTML = `Wins: ${score.Wins}   Losses: ${score.Losses}   Ties: ${score.Ties}`;

}

function computerGame() {
    let computerMove = '';
    const random = Math.random();
    if (random >= 0 && random < 1 / 3) {
        computerMove = 'rock';
    }
    else if (random >= 1 / 3 && random < 2 / 3) {
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissors';
    }
    return computerMove;
}