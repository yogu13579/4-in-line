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
let cclo;

for (let i = 0; i < 40; i++) {
  let html = `<div id="div${i + 1}" style="background-color: white;"></div>`;
  playBoard.insertAdjacentHTML("beforeend", html);
}

function dh(col, finalRow, color) {
  let currentRow = 1;
  const interval = setInterval(() => {
    const currentId = `div${(currentRow - 1) * 8 + col}`;
    const currentElement = document.getElementById(currentId);

    if (currentRow > 1) {
      const previousId = `div${(currentRow - 2) * 8 + col}`;
      const previousElement = document.getElementById(previousId);
      previousElement.style.backgroundColor = "white";
    }

    currentElement.style.backgroundColor = color;

    if (currentRow === finalRow) {
      clearInterval(interval);
    } else {
      currentRow++;
    }
  }, 100);
}

const gameOver = (message) => {
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
  // let lastTwo = event.target.id.slice(-2);
  // let lastTwoNum = Number(lastTwo) - 4 * 8;
  // let lastTwoStr = String(lastTwoNum);
  // let div = "div" + lastTwoStr;

  // document.getElementById(`div${lastTwoStr}`).style.backgroundColor =
  //   whosenow;
  // setTimeout(() => {
  //   document.getElementById(`div${lastTwoStr}`).style.backgroundColor =
  //     "white";
  // }, 1000);

  // if (ly === okY[lx] && event.target.style.backgroundColor === "white") {
  //   const whosenow = turn % 2 === 0 ? "red" : "blue";

  //   dh(lx, ly, whosenow);

  //   if (whosenow === "red") {
  //     red.push(`${lx}${ly}`);
  //   } else {
  //     blue.push(`${lx}${ly}`);
  //   }

  if (event.target.id.slice(0, 3) === "div") {
    cclo = ((Number(event.target.id.slice(3)) - 1) % 8) + 1;
  }

  if (okY[cclo] > 0) {
    const whoisnow = turn % 2 === 0 ? "red" : "blue";
    const downRow = okY[cclo];

    dh(cclo, downRow, whoisnow);

    if (whoisnow === "red") {
      red.push(`${cclo}${downRow}`);
    } else {
      blue.push(`${cclo}${downRow}`);
    }

    turn++;
    okY[lx]--;
    who.innerText = `Who's turn : ${whoisnow === "red" ? "blue" : "red"}`;
    draw++;
    checkWinner();
  }
});

function checkWinner() {
  if (draw === 40) isdraw();
  let redAndBlue = [red, blue];

  redAndBlue.forEach((playerMoves, index) => {
    const winPatterns = [10, 1, 9, 11];
    for (let i = 0; i < playerMoves.length; i++) {
      let num = Number(playerMoves[i]);
      for (let pattern of winPatterns) {
        if (
          playerMoves.includes(String(num + pattern)) &&
          playerMoves.includes(String(num + 2 * pattern)) &&
          playerMoves.includes(String(num + 3 * pattern))
        ) {
          if (index === 0) {
            setTimeout(redwins, 550);
          } else {
            setTimeout(bluewins, 550);
          }
        }
      }
    }
  });
}
