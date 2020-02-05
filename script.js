let doTheThing=function() {

    // computer picks number

    //loops have 3 parts: control boolean expression; control increment, decrement, or update
    //control variable-controls when the loop executes

    let restart = "yes";
    let trya = "yes";
    while (restart === "yes") {
        let num1 = Math.floor(Math.random() * 10) + 1;
        alert(num1);
        restart = "no";
        trya="yes";


        //guess a number

        //compare guess to number

        while (trya === "yes") {
            let guess = parseInt(prompt("Guess a Number"),10);

            if (num1 < guess) {
                alert("too high");
                trya = "yes"
            } else if (num1 > guess) {
                alert("too low");
                trya = "yes"
            } else {
                alert("congrats the number was " + num1);
                restart = "yes";
                trya = "no"
            }
        }
        ;
        //if higher alert too high then guess again -repeat
        //if lower alert too low then guess again-repeat
        //if equal alert you win and ask to restart
        //if yes repeat
        // if no do it anyways


    }
    ;
};
let DoTheOtherThing=function () {
    let restart;

    //Same thing with a do while loop
    do{
        let num1 = Math.floor(Math.random() * 10) + 1;

        do {
            let playerGuess = parseInt(prompt("Guess a number 1-10"), 10);
            if (playerGuess > num1) {
                playerGuess = parseInt(prompt("Too High Try again"), 10);

            } else playerGuess = parseInt(prompt("too low guess again"), 10);

        }while(playerGuess!==num1);
        restart=prompt("would you like to play again")

    }while(restart==="yes");
};