let choices = document.querySelectorAll(".choice");
let userScorPara = document.querySelector("#comp-score");
let userScorePara = document.querySelector("#user-score");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");

choices.forEach((n) => {
  n.addEventListener("click", () => {
    let userChoice = n.getAttribute("id");
    let comChoices = comChoice();
    playGame(userChoice, comChoices);
  });
});

let comChoice = () => {
  option = ["rock", "paper", "scissor"];
  let ran = Math.floor(Math.random() * 3);
  return option[ran];
};
comChoice();

let playGame = (userChoice, comChoice) => {
  console.log("your choice =", userChoice);
  msg2.innerText = ` user choice is ${userChoice} and computer choice is ${comChoice}`;

  console.log("computer choice =", comChoice);

  if (userChoice === comChoice) {
    drawGame();
  } else {
    userwin = true;
    if (userChoice === "rock") {
      userwin = comChoice === "scissor" ? true : false;
    } else if (userChoice === "paper") {
      userwin = comChoice === "rock" ? true : false;
    } else {
      userwin = comChoice === "paper" ? true : false;
    }
    showWinner(userwin);
  }
};

let drawGame = () => {
  console.log("Draw game");
  msg.innerText = "Draw Game";
  msg.style.backgroundColor = "blue";
};

let showWinner = (userwin) => {
  if (userwin) {
    console.log("user wins");
    msg.innerText = "Demon win";
    msg.style.backgroundColor = "green";
  } else {
    console.log("computer wins");
    msg.innerText = "Computer win";
    msg.style.backgroundColor = "red";
  }
};
