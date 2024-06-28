// Getting elements from the HTML
let playBtn = document.getElementById("playBtn");
let selectPlayerSec = document.querySelector(".seclet-player");
let welcomeSec = document.querySelector(".welcome-sec");
let onePlayer = document.getElementById("onePlayer");
let twoPlayers = document.getElementById("twoPlayers");
let playingAs = document.querySelector(".playing-as");
let playerX = document.getElementById("playerX");
let playerO = document.getElementById("PlayerO");
let gameBoard = document.querySelector(".game-board");
let restartGameBtn = document.getElementById("restartGameBtn");
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");

// Getting all of the nine buttons on the game board
let allGameBtn = document.querySelectorAll(".all-btn");

// Game state
let currentPlayer;
let isOnePlayer;
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Removing the welcome section and displaying the select player section
playBtn.addEventListener("click", () => {
  welcomeSec.style.display = "none";
  selectPlayerSec.style.display = "flex";
});

// Removing the select player number section and displaying the playing-as section
onePlayer.addEventListener("click", () => {
  isOnePlayer = true;
  selectPlayerSec.style.display = "none";
  playingAs.style.display = "flex";
});

twoPlayers.addEventListener("click", () => {
  isOnePlayer = false;
  selectPlayerSec.style.display = "none";
  playingAs.style.display = "flex";
});

// Function to start the game with the selected player
function startGame(player) {
  currentPlayer = player.value;
  playingAs.style.display = "none";
  gameBoard.style.display = "flex";
  gameState = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  for (let btn of allGameBtn) {
    btn.innerText = ""; // Clear any existing text
    btn.addEventListener("click", handlePlayerMove);
  }
}

// Removing the play as X or O section and displaying the game board section
playerX.addEventListener("click", () => startGame(playerX));
playerO.addEventListener("click", () => startGame(playerO));

// Handle player's move
function handlePlayerMove(event) {
  const clickedBtn = event.target;
  const clickedBtnIndex = Array.from(allGameBtn).indexOf(clickedBtn);

  if (gameState[clickedBtnIndex] !== "" || !gameActive) {
    return;
  }

  gameState[clickedBtnIndex] = currentPlayer;
  clickedBtn.innerText = currentPlayer;

  if (checkWin()) {
    gameActive = false;
    updateScore();
    return;
  }

  if (!gameState.includes("")) {
    gameActive = false; // Draw condition
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  if (isOnePlayer && gameActive) {
    handleComputerMove();
  }
}

// Handle computer's move for one player mode
function handleComputerMove() {
  let availableIndexes = gameState
    .map((val, index) => (val === "" ? index : null))
    .filter((val) => val !== null);
  let randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
  gameState[randomIndex] = currentPlayer;
  allGameBtn[randomIndex].innerText = currentPlayer;

  if (checkWin()) {
    gameActive = false;
    updateScore();
    return;
  }

  if (!gameState.includes("")) {
    gameActive = false; // Draw condition
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Check for win condition
function checkWin() {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return true;
    }
  }
  return false;
}

// Update score
function updateScore() {
  if (currentPlayer === "X") {
    player1Score.innerText = parseInt(player1Score.innerText) + 1;
  } else {
    player2Score.innerText = parseInt(player2Score.innerText) + 1;
  }
}

// Restart game button
restartGameBtn.addEventListener("click", () => {
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  for (let btn of allGameBtn) {
    btn.innerText = ""; // Clear any existing text
  }
  
});


