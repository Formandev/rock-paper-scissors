const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnPlay = document.getElementById("lets-play");

const resultWindow = document.getElementById("result-of-game")

const userImg = document.querySelector(".img-rock-paper-scissors.user-img");
const computerImg = document.querySelector(".img-rock-paper-scissors.computer-img");

let userChoice;

function displayRock(event) {
    userImg.setAttribute('src','./img/fist-svgrepo-com.svg');
    userChoice = event.target.value;
    clearComputerChoice();
}
function displayPaper(event) {
    userImg.setAttribute('src','./img/palm-svgrepo-com.svg');
    userChoice = event.target.value;
    clearComputerChoice();
}
function displayScissors(event) {
    userImg.setAttribute('src','./img/scissors-svgrepo-com.svg');
    userChoice = event.target.value;
    clearComputerChoice();
}
function clearComputerChoice() {
    computerImg.setAttribute('src', '');
    resultWindow.innerHTML = '';
}



function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function displayComputerChoice() {
    const choice = computerChoice();
    let computerImageSrc;

    switch (choice) {
        case 'rock':
            computerImageSrc = './img/fist-svgrepo-com.svg';
            break;
        case 'paper':
            computerImageSrc = './img/palm-svgrepo-com.svg';
            break;
        case 'scissors':
            computerImageSrc = './img/scissors-svgrepo-com.svg';
            break;
    }
    computerImg.setAttribute('src', computerImageSrc);
    return choice;
}

function determinationWinner(user, computer) {
    if (user === computer) {
        return "Draw!";
    }
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

btnPlay.addEventListener('click', () => {
    const computerChoiceResult = displayComputerChoice();
    const result = determinationWinner(userChoice, computerChoiceResult);
    resultWindow.textContent = result;
});