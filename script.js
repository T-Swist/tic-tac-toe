//gettting elements from the html
let playBtn = document.getElementById("playBtn");
let selectPlayerSec = document.querySelector(".seclet-player");
let welcomeSec = document.querySelector(".welcome-sec");
let onePlayer = document.getElementById("onePlayer");
let twoPlayers = document.getElementById("twoPlayers");
let playingAs = document.querySelector(".playing-as")
let playerX = document.getElementById("playerX");
let PlayerO = document.getElementById("PlayerO");
let gamneBoard = document.querySelector(".game-board");

//Getting the all of the nine btn on the game board
let allGameBtn = document.querySelectorAll(".all-btn");

// for (let index = 0; index < allGameBtn.length; index++) {
//   let currentBtn = allGameBtn[index];
//   currentBtn.addEventListener("click", (e) => {
//     // e.target.innerHTML = "Hey";
//     e.target.innerText = "h";
//   })
// }

let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");

//Removing the welcome section and displaying the second section
playBtn.addEventListener("click", (e) => {
  welcomeSec.style.setProperty("display", "none");
  selectPlayerSec.style.removeProperty("display", "none");
})


//Removing the select player number section and displaying the third section
onePlayer.addEventListener("click", (e) => {
  selectPlayerSec.style.setProperty("display", "none");
  playingAs.style.removeProperty("display", "none");
})

//Removing the select player number section and displaying the third section
twoPlayers.addEventListener("click", (e) => {
  selectPlayerSec.style.setProperty("display", "none");
  playingAs.style.removeProperty("display", "none");
})


//Removing the play as x or o section and displaying the game board section
playerX.addEventListener("click", (e) => {
  playingAs.style.setProperty("display", "none");
  gamneBoard.style.removeProperty("display", "none");
  let playIdentityX = (playerX.value);
  for (let index = 0; index < allGameBtn.length; index++) {
    let currentBtn = allGameBtn[index];
    currentBtn.addEventListener("click", (e) => {
      // e.target.innerHTML = "Hey";
      e.target.innerText = playIdentityX;
    })
  }
  
})

//Removing the play as x or o section and displaying the game board section
PlayerO.addEventListener("click", (e) => {
  playingAs.style.setProperty("display", "none");
  gamneBoard.style.removeProperty("display", "none");
  let playIdentityO = (PlayerO.value);
  for (let index = 0; index < allGameBtn.length; index++) {
    let currentBtn = allGameBtn[index];
    currentBtn.addEventListener("click", (e) => {
      // e.target.innerHTML = "Hey";
      e.target.innerHTML = playIdentityO;
    })
  }

})


