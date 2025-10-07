const all= document.querySelector(".container");
const gameBoard= document.getElementById("gameboard");
const cells = document.querySelectorAll(".cell");
const control= document.getElementById("controls");
const player1= document. getElementById("player1");
const player2= document.getElementById("player2");
const buttons= document.getElementById("buttons");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const message= document.getElementById("message");
const result = document.getElementById("resuilt");
const sqr1= document.getElementById("sqr-1");
const sqr2= document.getElementById("sqr-2");
const sqr3= document.getElementById("sqr-3");
const sqr4= document.getElementById("sqr-4");
const sqr5= document.getElementById("sqr-5");
const sqr6= document.getElementById("sqr-6");
const sqr7= document.getElementById("sqr-7");
const sqr8= document.getElementById("sqr-8");
const sqr9= document.getElementById("sqr-9");



let gameStore =[
    "","","","","","","","",""
];

let currentPlayer= "X";


cells.forEach((cell,index) => {
    
cell.addEventListener("click",function(){
    if ( gameStore[index]===""){
cell.textContent= currentPlayer;

gameStore[index]=currentPlayer;

if (currentPlayer === "X") {
  currentPlayer = "O";
} else {
  currentPlayer = "X";
}


    }
})

});

startButton.addEventListener("click", function(){

    gameBoard.style.display ="grid";
});
