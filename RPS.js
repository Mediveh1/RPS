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

function RPS() {
  player = player.toString();
  player = player.toLowerCase();
  computer = computerchoice();
  computer = computer.toString();
  computer = computer.toLowerCase();

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
function game() {
  player = prompt("Enter your choice:");
  return RPS();
}
console.log(game());
