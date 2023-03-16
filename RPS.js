let btnR = document.getElementById("rock");
let btnP = document.getAnimations("paper");
let btnS = document.getElementById("scissor");
let state = document.getElementById("status");
let BtnScore = document.getElementById("score");
var x = 0;

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
  computer = computerchoice();
  if (player === "rock" && computer === "scissor") {
    return "Win";
  }
  if (player === "scissor" && computer === "paper") {
    return "Win";
  }
  if (player === "paper" && computer === "rock") {
    return "Win";
  }
  if (player === "rock" && computer === "paper") {
    return "Loss";
  }
  if (player === "paper" && computer === "scissor") {
    return "Loss";
  }
  if (player === "scissor" && computer === "rock") {
    return "Loss";
  }
  if (player === computer) {
    return "Tie";
  }
}

function rock() {
  state.textContent = ` ${RPS("rock")}`;
  console.log(RPS("rock"));
  x++;
  BtnScore.textContent = `Score: ${x}`;
}
function paper() {
  state.textContent = ` ${RPS("paper")}`;
  console.log(RPS("paper"));
  BtnScore.textContent = x++;
  BtnScore.textContent = `Score: ${x}`;
}
function scissor() {
  state.textContent = ` ${RPS("scissor")}`;
  console.log(RPS("scissor"));
  x++;
  BtnScore.textContent = `Score: ${x}`;
}
