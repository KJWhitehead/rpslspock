function game() {
    const actions = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const userWinResults = []
    window.addEventListener("load", () => {
                let userChoice = "";
                let compChoice = "";

                document.querySelectorAll(".user-choice .game-card").forEach(card => {
                    card.addEventListener("click", (ev) => {
                        userChoice = getUserChoice(ev.target);
                        compChoice = getComputerChoice();

                        startGame();

                    })
                });

                function startGame() {

                }

                function getUserChoice(target) {
                    console.log(target);
                    if (target.nodeName === "IMG") {
                        return target.parentElement.classList[1];
                    }
                    return target.classList[1]
                }

                function getComputerChoice() {
                    actions[Math.floor(Math.random() * 5)]
                }

                function calculateWinner(user, comp) {
                    if (user === comp) {
                        console.log("Tie")
                    } else if () {
                        console.log("You win")
                    } else() {
                        console.log("You lose")
                    }
                }
            }