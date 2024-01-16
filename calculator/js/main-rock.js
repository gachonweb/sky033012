
let userChoice;


let computerChoice;


let resultText = document.getElementById("result");
let attemptsText = document.getElementById("attempts");


let userWins = 0;
let totalAttempts = 0;

document.getElementById("rockBtn").addEventListener("click", function () {
    userChoice = "rock";
    playGame();
});

document.getElementById("paperBtn").addEventListener("click", function () {
    userChoice = "paper";
    playGame();
});

document.getElementById("scissorsBtn").addEventListener("click", function () {
    userChoice = "scissors";
    playGame();
});

function playGame() {
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * 3)];

    resultText.innerHTML = `사용자 선택: ${userChoice} | 컴퓨터 선택: ${computerChoice} | `;

    if (userChoice === computerChoice) {
        resultText.innerHTML += "비겼습니다!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText.innerHTML += "이겼습니다!";
        userWins++;
    } else {
        resultText.innerHTML += "졌습니다!";
    }
    
}
function goToIndex() {
    window.location.href = '../index.html';
}