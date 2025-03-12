
const computerMove = () => {
  let randomMoves = Math.floor(Math.random() * 3);

  let comMove;
  if (randomMoves === 0) {
    comMove = "scissor";
  } else if (randomMoves === 1) {
    comMove = "rock";
  } else if (randomMoves == 2) {
    comMove = "paper";
  }

  return comMove;
};

const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");

let yourMove;
let win = 0;
let lose = 0;
let tie = 0;

const winw = document.getElementById("win");
const losee = document.getElementById("lose");
const tiee = document.getElementById("tie");

const paperImg = "imges/paper.png";
const rockImg = "imges/rock.png";
const scissorImg = "imges/scissor.png";

const announceWinner = document.querySelector(".announce");

let yourMoves = document.querySelector(".yourMove");
let enemyMoves = document.querySelector(".enemyMove");

paper.addEventListener("click", () => {
  let comMove = computerMove();
  let annouceWin;
  yourMove = "paper";
  if (yourMove === "paper" && comMove === "paper") {
    annouceWin = "Tie";
    tie++;
  } else if (yourMove === "paper" && comMove === "scissor") {
    annouceWin = "You lose";
    lose++;
  } else if (yourMove === "paper" && comMove === "rock") {
    annouceWin = "You win";
    win++;
  }

  announceWinner.innerText = annouceWin;
  yourMoves.innerHTML = `<img src="imges/${yourMove}.png" alt="" />`;
  enemyMoves.innerHTML = `<img src="imges/${comMove}.png" alt="" />`;
  winw.innerText = win;
  losee.innerText = lose;
  tiee.innerText = tie;
});

rock.addEventListener("click", () => {
  let annouceWin;
  let comMove = computerMove();
  yourMove = "rock";
  if (yourMove === "rock" && comMove === "rock") {
    annouceWin = "Tie";
    tie++;
  } else if (yourMove === "rock" && comMove === "paper") {
    annouceWin = "You lose";
    lose++;
  } else if (yourMove === "rock" && comMove === "scissor") {
    annouceWin = "You win";
    win++;
  }

  yourMoves.innerHTML = ` <img src="imges/${yourMove}.png" alt="" />`;
  enemyMoves.innerHTML = ` <img src="imges/${comMove}.png" alt="" />`;
  announceWinner.innerText = annouceWin;
  winw.innerText = win;
  losee.innerText = lose;
  tiee.innerText = tie;
});

scissor.addEventListener("click", () => {
  let annouceWin;
  let comMove = computerMove();
  yourMove = "scissor";

  if (yourMove === "scissor" && comMove === "scissor") {
    annouceWin = "Tie";
    tie++;
  } else if (yourMove === "scissor" && comMove === "rock") {
    annouceWin = "You lose";
    lose++;
  } else if (yourMove === "scissor" && comMove === "paper") {
    annouceWin = "You win";
    win++;
  }
  yourMoves.innerHTML = ` <img src="imges/${yourMove}.png" alt="" />`;
  enemyMoves.innerHTML = ` <img src="imges/${comMove}.png" alt="" />`;
  announceWinner.innerText = annouceWin;
  winw.innerText = win;
  losee.innerText = lose;
  tiee.innerText = tie;
});

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
  win = 0;
  lose = 0;
  tie = 0;
  winw.innerText = win;
  losee.innerText = lose;
  tiee.innerText = tie;
  yourMoves.innerHTML = ``;
  enemyMoves.innerHTML = ``;
  announceWinner.innerText = ``;
  console.log("click");
});
