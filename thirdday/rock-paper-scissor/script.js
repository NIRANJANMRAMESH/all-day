const choices = ["rock", "paper", "scissor"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultd = document.getElementById("result");

function playgame(playerchoice) {
  const computerchoices = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerchoice === computerchoices) {
    result = "its a Tie";
    resultd.style.color="white"
    resultd.textContent=result

  } else {
    switch (playerchoice) {
      case "rock":
        result = (computerchoices === "scissor" )? "you win" : "you lose";
        break;
      case "paper":
        result = (computerchoices === "rock") ? "you win" : "you lose";
        break;
      case "scissor":
        result = (computerchoices === "paper") ? "you win" : "you lose";
        break;
    }


    player.textContent = `player: ${playerchoice}`;
    computer.textContent = `computer:${computerchoices}`;
    resultd.textContent = `result:${result}`;

    switch (result) {
      case "you win":
        resultd.style.color = "green";
        break;
      case "you lose":
        resultd.style.color="red";
        break;
    }
  }
}
