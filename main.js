let YourCount = 0;
let computerCount = 0;

const Choies = document.querySelectorAll(".choies");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#Your-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
  const options = ["rock", "pepar", "scissors"];
  const randomvalu = Math.floor(Math.random() * 3);
  return options[randomvalu];
};

const PlayGame = (userChoice) => {
  //   console.log("User Choice Value", choiceId);
};

const ShowWinner = (userwin, userChoice, computerchoice) => {
  if (userwin) {
    YourCount++;
    userScorePara.innerText = YourCount;
    msg.innerText = `You Win your ${userChoice} beits Computer ${computerchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerCount++;
    computerScorePara.innerText = computerCount;
    msg.innerText = `You Loss Computer ${computerchoice} beits  Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const GameDrow = () => {
  //   console.log("Game is Drow...");
  msg.innerText = "Game is Drow....";
  msg.style.backgroundColor = "black";
};

Choies.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Users Choice", userChoice);

    PlayGame(userChoice);

    const computerchoice = genComputerChoice();
    // console.log("Computer Choice", computerchoice);

    if (userChoice == computerchoice) {
      GameDrow();
    } else {
      let userwin = true;

      if (userChoice === "rock") {
        userwin = computerchoice == "papper" ? false : true;
      } else if (userChoice === "pepar") {
        userwin = computerchoice == "scissors" ? false : true;
      } else {
        userwin = computerchoice == "rock" ? false : true;
      }
      ShowWinner(userwin, userChoice, computerchoice);
    }
  });
});
