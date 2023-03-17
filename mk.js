var audio = new Audio("music/Mortal Kombat.mp3");
var subzeroA = new Audio("music/subzero.mp3");
var scorpionA = new Audio("music/scorpion.mp3");
var btnStatus = document.querySelector(".status");
var playerScore = document.querySelector(".scoreP");
var computerScore = document.querySelector(".scoreC");
let playerIcon = document.querySelector(".player1");
let computerIcon = document.querySelector(".player2");
var p = 0;
var c = 0;
function computerchoice() {
  let x = Math.floor(Math.random() * 3);

  if (x === 0) {
    return "paper";
  } else if (x === 1) {
    return "scissor";
  } else {
    return "rock";
  }
}

function RPS(player) {
  var computer = computerchoice();
  if (player === "rock" && computer === "scissor") {
    p++;
    playerScore.textContent = `Player score ${p}`;
    return "Win";
  }
  if (player === "scissor" && computer === "paper") {
    p++;
    playerScore.textContent = `Player score ${p}`;
    return "Win";
  }
  if (player === "paper" && computer === "rock") {
    p++;
    playerScore.textContent = `Player score ${p}`;
    return "Win";
  }
  if (player === "rock" && computer === "paper") {
    c++;
    computerScore.textContent = `Computer Score ${c}`;
    return "Loss";
  }
  if (player === "paper" && computer === "scissor") {
    c++;
    computerScore.textContent = `Computer Score ${c}`;
    return "Loss";
  }
  if (player === "scissor" && computer === "rock") {
    c++;
    computerScore.textContent = `Computer Score ${c}`;
    return "Loss";
  }
  if (player === computer) {
    return "Tie";
  }
}

function rock() {
  btnStatus.textContent = ` ${RPS("rock")}`;
  hitSound.play();
}
function paper() {
  btnStatus.textContent = ` ${RPS("paper")}`;
  hitSound1.play();
}
function scissor() {
  btnStatus.textContent = ` ${RPS("scissor")}`;
  hitSound2.play();
}

//music
function theme() {
  audio.play();
}
function subzero() {
  subzeroA.play();
}
function scorpion() {
  scorpionA.play();
}

//resizing
function resize(img) {
  img.width = "200px";
  img.height = "200px";
}

//Fight webpage

//variables
var round1 = new Audio("music/round one.mp3");
var round2 = new Audio("music/round two.mp3");
var round3 = new Audio("music/round three.mp3");
var round4 = new Audio("music/round 4.mp3");
var round5 = new Audio("music/final round.mp3");
var hitSound = new Audio("music/hit.mp3");
var hitSound1 = new Audio("music/hit1.mp3");
var hitSound2 = new Audio("music/hit2.mp3");
let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper");
let btnScissor = document.getElementById("scissor");

let currentRound = document.getElementById("round");
var counter = 0;
//start fight function
function startF() {
  counter++;
  currentRound.textContent = `Round ${counter}`;
  if (counter == 1) {
    round1.play();
  }
  if (counter == 2) {
    round2.play();
  }
  if (counter == 3) {
    round3.play();
  }
  if (counter == 4) {
    round4.play();
  }
  if (counter == 5) {
    round5.play();
    counter = 0;
  }
}
