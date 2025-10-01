function checkCommand() {
      const input = document.getElementById("gameInput").value.trim().toLowerCase();
      if (input === "start") {
        startGame();
      } else {
        alert("Invalid command. Please type 'Start Game'.");
      }
    }


function startGame() {
const max = prompt("Enter the maximum number");
let random = Math.floor(Math.random() * max) + 1;
let guess;
let attempts = 0;
guess = prompt("guess the number between 1 to " + max);
attempts++;
while(true){
    if(guess=="quit"){
        alert("you quit the game");
        break;
    }
    else if(guess==random){
        alert("you guessed it right in " + attempts + " attempts");
        break;
}
    else if(guess<random){
        guess = prompt("too low! try again");
        attempts++;
    }   else if(guess>random){
        guess = prompt("too high! try again");
        attempts++;
    }  

    
}
}