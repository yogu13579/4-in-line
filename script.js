const playBoard = document.querySelector(".play-board");
const line = document.querySelector(".line");
const who = document.querySelector(".turn");
const okY = { 1: 5, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5, 7: 5, 8: 5 };

let setId;
let lx;
let ly;
let x, y;
let red = [];
let blue = [];
let draw = 0;
let turn = 2;
let turn1, turn2;

for (let i = 0; i < 40; i++) {
  let html = `<div id="div${i + 1}" style="background-color: white;"></div>`;
  playBoard.insertAdjacentHTML("beforeend", html);
}

const gameOver = (message) => {
  clearInterval(setId);
  alert(message);
  location.reload();
};

const redwins = () => {
  gameOver("Game Over! Red is the winner! Press reload to replay...");
};
const bluewins = () => {
  gameOver("Game Over! Blue is the winner! Press reload to replay...");
};
const isdraw = () => {
  gameOver("Game Over! It's a draw  ! Press reload to replay...");
};

document.addEventListener("mousemove", function (event) {
  const rect = playBoard.getBoundingClientRect();
  const realWidth = rect.width / 8;
  const realHeight = rect.height / 5;

  x = Math.floor((event.clientX - rect.left) / realWidth);
  y = Math.floor((event.clientY - rect.top) / realHeight);

  if (x >= 0 && x <= 7 && y >= 0 && y <= 4) {
    line.innerText = `It's line ${x + 1}`;
    lx = x + 1;
    ly = y + 1;
  }
});

document.addEventListener("click", function (event) {
  if (ly === okY[lx] && event.target.style.backgroundColor === "white") {
    const currentPlayer = turn % 2 === 0 ? "red" : "blue";
    event.target.style.backgroundColor = currentPlayer;

    if (currentPlayer === "red") {
      red.push(`${lx}${ly}`);
    } else {
      blue.push(`${lx}${ly}`);
    }

    turn++;
    okY[lx]--;
    who.innerText = `Who's turn : ${currentPlayer === "red" ? "blue" : "red"}`;
    draw++;
  }
});

function checkWinner() {
  if (draw === 40) isdraw();

  [red, blue].forEach((playerMoves, index) => {
    const winPatterns = [10, 1, 9, 11];
    for (let i = 0; i < playerMoves.length; i++) {
      let num = Number(playerMoves[i]);
      for (let pattern of winPatterns) {
        if (
          playerMoves.includes(String(num + pattern)) &&
          playerMoves.includes(String(num + 2 * pattern)) &&
          playerMoves.includes(String(num + 3 * pattern))
        ) {
          index === 0 ? redwins() : bluewins();
        }
      }
    }
  });
}

setId = setInterval(checkWinner, 100);

