  const defaultScore = 0;
  let humanScore = 0;
  let computerScore = 0;

  const result = document.querySelector(".result");
  const para = document.createElement("p");
  const scores = document.querySelector(".scores");
  const human = document.querySelector(".human-score");
  const computer = document.querySelector(".computer-score");

  function getComputerChoice() {
      // Multiple the random number to 3 so we can increase the random values from between 0=> but <1 to 0=> but not <3
      let randomChoice = Math.random() * 3;
      //Round down the numbers outputs are 0,1,2
      let computerChoice = Math.floor(randomChoice);
      //If computerChoice is 0 we set computerChoice to 0
      return computerChoice;
    }

    function getHumanChoice(choice) {
      //prompt user to select among the three and convert is to lowercase for case insensitivity
      // choice = prompt("Rock, Paper or Scissors?").toLowerCase();
            //If human is rock we set choice to 0
      switch (choice){
      case "rock":
        return 0;
        break;
      case "paper":
        return 1;
        break;
      case "scissors":
        return 2;
        break;
      }
    }

    function playRound(humanChoice,computerChoice) {
      humanChoiceToNumber = getHumanChoice(humanChoice);
      if (humanChoiceToNumber == computerChoice) {
        para.textContent = "It's a Draw!";
        }
      if (humanChoiceToNumber == 0 && computerChoice == 1) {
        computerScore++;
        para.textContent = "You loss paper beat's the rock";
      }
      if (humanChoiceToNumber == 0 && computerChoice == 2) {
        humanScore++;
        para.textContent = "You win rock beat's the scissors!";
      }
      if (humanChoiceToNumber == 1 && computerChoice == 0) {
        humanScore++;
        para.textContent = "You win paper beat's the rock!";
      }
      if (humanChoiceToNumber == 1 && computerChoice == 2) {
        computerScore++;
        para.textContent = "You loss scissors beat's the rock!";
      }
      if (humanChoiceToNumber == 2 && computerChoice == 0) {
        computerScore++;
        para.textContent = "You loss rocks beat's the scissors!";
      }
      if (humanChoiceToNumber == 2 && computerChoice == 1) {
        humanScore++;
        para.textContent = "You win scissors beat's the paper!";
      }

      result.appendChild(para);
      updateScore();
      check();
    }

    function check() {
    if (humanScore == 5) {
      alert("You Win!")
      reset();
    }
    else if (computerScore == 5) {
      alert("Computer Wins!")
      reset();
    }

    }




function globalListener(type, tag, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(tag)) {
      callback(e);
    }
  });
}

globalListener("click", "button", e => {
  if (e.target.matches(".btn-rock")){
  const humanChoice = "rock";
  let computerChoice = getComputerChoice();
  playRound(humanChoice,computerChoice);
  }
  else if (e.target.matches(".btn-paper")){
  const humanChoice = "paper";
  playRound(humanChoice,getComputerChoice());
  }
  if (e.target.matches(".btn-scissors")){
  const humanChoice = "scissors";
  playRound(humanChoice,getComputerChoice());
  }
});


    function reset() {
      humanScore = defaultScore;
      computerScore = defaultScore;
      result.removeChild(para);
      human.textContent = defaultScore;
      scores.appendChild(human)
      computer.textContent = defaultScore;
      scores.appendChild(computer)
    }

    function updateScore() {
      human.textContent = humanScore;
      scores.appendChild(human)
      computer.textContent = computerScore;
      scores.appendChild(computer)
    }

