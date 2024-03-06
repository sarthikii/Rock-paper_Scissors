const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");

let userScore = 0; let compScore = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const draw = () => {
    msg.innerText = "Game was Draw. Play again.";
    console.log("Game was draw");
    msg.style.backgroundColor = "#081b31";
}
const rank = (userWin) => {
    if (userWin) {
        userScore++
    } else {
        compScore++;
    } 
    console.log("your score", userScore);
    uScore.innerText = userScore;
    console.log("comp score", compScore);
    cScore.innerText = compScore;

}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        console.log("you Lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}
const playGame = (userChoice) => {
    console.log("User choise", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice", compChoice);
    if (userChoice === compChoice) {
        //Draw
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice); 
        rank(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});