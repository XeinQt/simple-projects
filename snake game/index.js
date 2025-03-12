const board = document.querySelector('.board');
const scoreElement = document.getElementById('score');
const highsScoreElement = document.getElementById('highScore');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');
const modalMessage = document.getElementById('modalMessage');
const modalVideo = document.getElementById('modalVideo');
const modalAudio = document.getElementById('modalAudio');

let foodY, foodX;
let snakeY = 5, snakeX = 13;
let snakeBody = [[snakeY, snakeX]];
let moveY = 0, moveX = 0;
let score = 0;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;
let setItervalId;

const changeDirection = (e) => {
  if(e.key === "ArrowUp" && moveY != 1){
    moveY = -1;
    moveX = 0;
  } else if(e.key === "ArrowDown" && moveY != -1){
    moveY = 1;
    moveX = 0;
  } else if(e.key === "ArrowRight" && moveX != -1){
    moveY = 0;
    moveX = 1;
  } else if(e.key === "ArrowLeft" && moveX != 1){
    moveY = 0;
    moveX = -1;
  }
}

const changeFoodDirection = () => {
  foodY = Math.floor(Math.random() * 40) + 1;
  foodX = Math.floor(Math.random() * 40) + 1;
}

const game = () => {
    modalVideo.pause();
    modalAudio.pause();
  
    let HmltMarkUp = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  
    if (snakeX === foodX && snakeY === foodY) {
      snakeBody.push([snakeBody[snakeBody.length - 1]]);
      score++;
      scoreElement.innerHTML = `Score: ${score}`;
      changeFoodDirection();
    }
  
    snakeBody.unshift([snakeY, snakeX]);
    snakeBody.pop();
    
    snakeY += moveY;
    snakeX += moveX;
  
    if (snakeX < 1 || snakeX > 40 || snakeY < 1 || snakeY > 40 || isColliding()) {
      if (score > highScore) {
        highScore = score;
        highsScoreElement.innerHTML = `Highest Score: ${highScore}`;
        localStorage.setItem('highScore', highScore);
      }
  
      score = 0;
      scoreElement.innerHTML = `Score: ${score}`;
      highsScoreElement.innerHTML = `Highest Score: ${highScore}`;
  
      modal.classList.add("show");
      modalMessage.style.display = "block";
      modalVideo.style.display = "none";
      modalAudio.style.display = "none";
  
      setTimeout(() => {
        modalMessage.style.display = "none";
        modalVideo.style.display = "block";
        modalAudio.style.display = "block";
        modalVideo.play();
        modalAudio.play();
      }, 2000);
  
      clearInterval(setItervalId);
    }
  
    snakeBody.forEach(snake => {
      HmltMarkUp += `<div class="head" style="grid-area: ${snake[0]} / ${snake[1]}"></div>`;
    });
  
    console.log(HmltMarkUp);
    board.innerHTML = HmltMarkUp;
  }
  
closeModalButton.addEventListener('click', () => {
    modal.classList.remove("show");
    modalVideo.pause();
    modalAudio.pause();
    location.reload();
});
  
const isColliding = () => {
  const [head, ...body] = snakeBody;
  return body.some(segment => segment[0] === head[0] && segment[1] === head[1]);
};

highsScoreElement.innerHTML = `Highest Score: ${highScore}`;
changeFoodDirection();
setItervalId = setInterval(game, 50);

document.addEventListener('keydown', changeDirection);        