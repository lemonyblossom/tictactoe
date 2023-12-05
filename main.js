//DOM MANIPULERING
console.log("Tic Tac Toe");

const gameTiles = document.getElementsByClassName('grid-item');

for (let tile of gameTiles) {
   tile.addEventListener("click", changeValue);
   
}

let player = "X";
//FUNKTION FÖR CLICKEVENT
function changeValue(){
console.log("click click!");

if(this.innerHTML === "&nbsp;")

if (player === "X"){
   this.innerHTML = "X";
   player = "O";// Byt till player O
} else {
   this.innerHTML = "O";
   player = "X";
}

checkWinner();
}
function checkWinner(){
   console.log("checking for winner");
   const winnerMsg = document.getElementById("winner");
//vågrätt
   if(gameTiles[0].innerHTML != "&nbsp;" &&
   gameTiles[1].innerHTML === gameTiles[0].innerHTML &&
   gameTiles[2].innerHTML === gameTiles[1].innerHTML  
   ){
      console.log("X or O won");
      winnerMsg.innerHTML = gameTiles[0].innerHTML + " is the winner!";
   }
   if(gameTiles[3].innerHTML != "&nbsp;" &&
   gameTiles[4].innerHTML === gameTiles[3].innerHTML &&
   gameTiles[5].innerHTML === gameTiles[4].innerHTML  
   ){
      console.log("X or O won");
      winnerMsg.innerHTML = gameTiles[3].innerHTML + " is the winner!";
   }
   if(gameTiles[6].innerHTML != "&nbsp;" &&
   gameTiles[7].innerHTML === gameTiles[6].innerHTML &&
   gameTiles[8].innerHTML === gameTiles[7].innerHTML  
   ){
      console.log("X or O won");
      winnerMsg.innerHTML = gameTiles[6].innerHTML + " is the winner!";
   }

   //Lodrätt
   if(gameTiles[0].innerHTML != "&nbsp;" &&
   gameTiles[3].innerHTML === gameTiles[0].innerHTML &&
   gameTiles[6].innerHTML === gameTiles[3].innerHTML  
   ){
      console.log("X or O won");
      winnerMsg.innerHTML = gameTiles[0].innerHTML + " is the winner!";
   }
   if(gameTiles[1].innerHTML != "&nbsp;" &&
   gameTiles[4].innerHTML === gameTiles[1].innerHTML &&
   gameTiles[7].innerHTML === gameTiles[4].innerHTML  
   ){
      console.log("X or O won");
      winnerMsg.innerHTML = gameTiles[1].innerHTML + " is the winner!";
   }
   if(gameTiles[2].innerHTML != "&nbsp;" &&
   gameTiles[5].innerHTML === gameTiles[2].innerHTML &&
   gameTiles[8].innerHTML === gameTiles[5].innerHTML  
   ){
      console.log("X or O won");
      winnerMsg.innerHTML = gameTiles[2].innerHTML + " is the winner!";
   }
//diagonalen
//upper left to lower right
if (
   gameTiles[0].innerHTML != "&nbsp;" &&
   gameTiles[0].innerText === gameTiles[4].innerText &&
   gameTiles[4].innerText === gameTiles[8].innerText
 ) {
   winnerParagraph.innerHTML = gameTiles[0].innerHTML + " is the winner!";
 }

 //lower left to upper right
 if (
   gameTiles[6].innerHTML != "&nbsp;" &&
   gameTiles[6].innerText === gameTiles[4].innerText &&
   gameTiles[4].innerText === gameTiles[2].innerText
 ) {
   winnerParagraph.innerHTML = gameTiles[6].innerHTML + " is the winner!";
 }
}

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click",resetGame);

function resetGame(){
   for(let tile of gameTiles){
      tile.innerHTML = "&nbsp;";
   }
   player = "X";
   winnerMsg.innerHTML = " ";
   console.log("Resetted");
}

console.log(gameTiles);


/*const PLAYER_X_CLASS = 'x'
const PLAYER_O_CLASS = 'circle'
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]*/