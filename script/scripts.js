'use strict';


// Helpers
const totalPlayerOne = document.querySelector('.player-one .total');
const totalPlayerTwo = document.querySelector('.player-two .total');
const currentPlayerOne = document.querySelector('.player-one .current');
const currentPlayerTwo = document.querySelector('.player-two .current');
const rollBtn = document.querySelector('.roll');
const holdBtn = document.querySelector('.hold');
const newGameBtn = document.querySelector('.new');
const dice = document.querySelector('.dice');
const playerOne = document.querySelector('.player-one');
const playerTwo = document.querySelector('.player-two');
const playerOneWin = document.querySelector('.player-one .winner');
const playerTwoWin = document.querySelector('.player-two .winner');


const changePlayer = function () {
    if (playerOne.classList.contains('disable')) {
        totalPlayerTwo.textContent = Number(totalPlayerTwo.textContent) + Number(currentPlayerTwo.textContent);
        currentPlayerTwo.textContent = 0;
        playerTwo.classList.toggle('disable');
        playerOne.classList.toggle('disable');
    } else {
        totalPlayerOne.textContent = Number(totalPlayerOne.textContent) + Number(currentPlayerOne.textContent);
        currentPlayerOne.textContent = 0;
        playerOne.classList.toggle('disable');
        playerTwo.classList.toggle('disable');
    }
    winner();
}

const winner = function () {
    if (Number(totalPlayerOne.textContent) >= 30) {
        playerTwo.classList.toggle('disable');
        playerOne.classList.toggle('disable');
        playerOneWin.style.display = "block";
        holdBtn.setAttribute('disabled', 'true');
        rollBtn.setAttribute('disabled', 'true');

    } else if (Number(totalPlayerTwo.textContent) >= 30) {
        playerOne.classList.toggle('disable');
        playerTwo.classList.toggle('disable');
        playerTwoWin.style.display = "block";
        holdBtn.setAttribute('disabled', 'true');
        rollBtn.setAttribute('disabled', 'true');

    }
}

const roll = function (current, randomNum) {

    switch (randomNum) {
        case 1:
            dice.setAttribute('src', 'images/dice-1.png');
            current.textContent = 0;
            changePlayer();
            break;
        case 2:
            dice.setAttribute('src', 'images/dice-2.png');
            current.textContent = Number(current.textContent) + 2
            break;
        case 3:
            dice.setAttribute('src', 'images/dice-3.png');
            current.textContent = Number(current.textContent) + 3
            break;
        case 4:
            dice.setAttribute('src', 'images/dice-4.png');
            current.textContent = Number(current.textContent) + 4
            break;
        case 5:
            dice.setAttribute('src', 'images/dice-5.png');
            current.textContent = Number(current.textContent) + 5
            break;
        case 6:
            dice.setAttribute('src', 'images/dice-6.png');
            current.textContent = Number(current.textContent) + 6
            break;
        default:
            return
    }
}

rollBtn.addEventListener('click', function () {
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    dice.style.display = 'block';
    console.log(+currentPlayerOne.textContent);
    if (!playerOne.classList.contains('disable')) {
        roll(currentPlayerOne, randomNum)
    } else {
        roll(currentPlayerTwo, randomNum)
    }

})

holdBtn.addEventListener('click', function () {
    changePlayer();
})


newGameBtn.addEventListener('click', function () {
    totalPlayerOne.textContent = 0;
    totalPlayerTwo.textContent = 0;
    currentPlayerOne.textContent = 0;
    currentPlayerTwo.textContent = 0;
    holdBtn.removeAttribute('disabled');
    rollBtn.removeAttribute('disabled');
    dice.style.display = 'none';
    playerOneWin.style.display = "none";
    playerTwoWin.style.display = "none";
    playerTwo.classList.add('disable');
    playerOne.classList.remove('disable');
})





// ********** Different and Improved way **********
// Helpers
// El stands for Element
/*const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;
const resetGame = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');

    scores = [0, 0]
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
}
resetGame()

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', resetGame);
*/