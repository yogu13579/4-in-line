const playBoard = document.querySelector(".play-board");
const line = document.querySelector(".line");
const who = document.querySelector(".turn");
let setId;
let color;
let lx;
let ly;
let red = [];
let blue = [];
let i = 0;
let i1 = 0;
let turn = 2;
let okY1 = 4;
let okY2 = 4;
let okY3 = 4;
let okY4 = 4;
let okY5 = 4;
let okY6 = 4;
let okY7 = 4;
let okY8 = 4;

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
    console.log(`X : ${x}, Y : ${y}`)
    line.innerText = `It's line ${x + 1}`
    lx = x;
    ly = y;
  }
  
});

function redwins() {
  clearInterval(setId);
  alert("Game Over! Red is the winner! Press OK to replay...");
}

document.addEventListener("click", function (event){ 
  
  if (ly === okY1 && lx === 0) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++
        okY1--;
        who.innerText = `Who's turn : blue`;
        i++;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++
        okY1--;
        who.innerText = `Who's turn : red`;
        i1++
      } else {
        return;
      }
    };
  } else if (ly === okY2 && lx === 1) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++
        okY2--;
        who.innerText = `Who's turn : blue`;
        i++;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++
        okY2--;
        who.innerText = `Who's turn : red`;
        i1++
      } else {
        return;
      }
    }
  }else if (ly === okY3 && lx === 2) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++
        okY3--;
        who.innerText = `Who's turn : blue`;
        i++;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++
        okY3--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY4 && lx === 3) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++
        okY4--;
        i++
        who.innerText = `Who's turn : blue`;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++
        okY4--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY5 && lx === 4) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++
        okY5--;
        who.innerText = `Who's turn : blue`;
        i++;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++
        okY5--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY6 && lx === 5) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++
        okY6--;
        who.innerText = `Who's turn : blue`;
        i++;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++
        okY6--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY7 && lx === 6) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++
        okY7--;
        who.innerText = `Who's turn : blue`;
        i++
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++
        okY7--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY8 && lx === 7) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++
        okY8--;
        i++;
        who.innerText = `Who's turn : blue`;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++
        okY8--;
        who.innerText = `Who's turn : red`;
        i1++
      } else {
        return;
      }
    }
  }
  
});

function checkWinner() {
  
}


setId = setInterval(checkWinner, 100);
