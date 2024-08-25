const playBoard = document.querySelector(".play-board");
const line = document.querySelector(".line");
const who = document.querySelector(".turn");
let color;
let lx;
let ly;
let turn = 2;

document.addEventListener("mousemove", function (event) {
  const rect = playBoard.getBoundingClientRect();

  const realWidth = rect.width / 8;
  const realHight = rect.height / 5;

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  x = Math.floor(mouseX / realWidth);
  y = Math.floor(mouseY / realHight);

  if (y < 0) {
    return;
  } else if (x > 7) {
    return;
  } else if (y > 4) {
    return;
  } else if (x < 0) {
    return;
  } else {
    console.log(`X : ${x}, Y : ${y}`);
    let html = `<div class="piece" style="grid-area: ${y + 1} / ${x + 1}"></div>`
    // playBoard.insertAdjacentHTML("beforeend", html)
    line.innerText = `It's line ${x + 1}`
    lx = x;
    ly = y;
  }
  
});

document.addEventListener("click", function (event){ 
  
  if (turn % 2 === 0) {
    if (event.target.style.backgroundColor === "white") {
      event.target.style.backgroundColor = 'red';
      turn++
      who.innerText = `Who's turn : blue`
    } else {
      return;
    }
  } else if (turn % 2 !== 0) {
    if (event.target.style.backgroundColor === "white") {
      event.target.style.backgroundColor = 'blue';
      turn++
      who.innerText = `Who's turn : red`
    } else {
      return;
    }
  }
});




