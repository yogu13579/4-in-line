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
let okY1 = 5;
let okY2 = 5;
let okY3 = 5;
let okY4 = 5;
let okY5 = 5;
let okY6 = 5;
let okY7 = 5;
let okY8 = 5;

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
    console.log(`X : ${x + 1}, Y : ${y + 1}`)
    line.innerText = `It's line ${x + 1}`
    lx = x + 1;
    ly = y + 1;
  }
  
});

function redwins() {
  clearInterval(setId);
  alert("Game Over! Red is the winner! Press reload to replay...");
  location.reload();
}

function bluewins() {
  clearInterval(setId);
  alert("Game Over! Blue is the winner! Press reload to replay...");
  location.reload();
}

document.addEventListener("click", function (event){ 
  
  if (ly === okY1 && lx === 1) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++;
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
        turn++;
        okY1--;
        who.innerText = `Who's turn : red`;
        i1++
      } else {
        return;
      }
    }
  }else if (ly === okY2 && lx === 2) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++;
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
        turn++;
        okY2--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY3 && lx === 3) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++;
        okY3--;
        i++
        who.innerText = `Who's turn : blue`;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++;
        okY3--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY4 && lx === 4) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++;;
        okY4--;
        who.innerText = `Who's turn : blue`;
        i++;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++;
        okY4--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY5 && lx === 5) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++;
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
        turn++;
        okY5--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY6 && lx === 6) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++;
        okY6--;
        who.innerText = `Who's turn : blue`;
        i++
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++;
        okY6--;
        who.innerText = `Who's turn : red`;
        i1++;
      } else {
        return;
      }
    }
  }else if (ly === okY7 && lx === 7) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++;
        okY7--;
        i++;
        who.innerText = `Who's turn : blue`;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++;
        okY7--;
        who.innerText = `Who's turn : red`;
        i1++
      } else {
        return;
      }
    }
  } else if (ly === okY8 && lx === 8) {
    if (turn % 2 === 0) {
      if (event.target.style.backgroundColor === "white") {
        red[i] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'red';
        turn++;
        okY8--;
        who.innerText = `Who's turn : blue`;
        i++;
      } else {
        return;
      }
    } else if (turn % 2 !== 0) {
      if (event.target.style.backgroundColor === "white") {
        blue[i1] = `${lx}` + `${ly}`;
        event.target.style.backgroundColor = 'blue';
        turn++;
        okY8--;
        who.innerText = `Who's turn : red`;
        i1++
      } else {
        return;
      }
    };
  } 
  
});

function checkWinner() {
  for (let i = 0; i < red.length; i++) {
    let num = Number(red[i]);
    if (red.includes(String(num + 10))) {
      if (red.includes(String(num + 20))) {
        if (red.includes(String(num + 30))) {
          redwins();
        }
      };
    } else if (red.includes(String(num + 1))) {
      if (red.includes(String(num + 2))) {
        if (red.includes(String(num + 3))) {
          redwins();
        }
      }
    } else if (red.includes(String(num + 9))) {
      if (red.includes(String(num + 18))) {
        if (red.includes(String(num + 27))) {
          redwins();
        }
      }
    } else if (red.includes(String(num + 11))) {
      if (red.includes(String(num + 22))) {
        if (red.includes(String(num + 33))) {
          redwins();
        }
      }
    }
  } 
  for (let i = 0; i < blue.length; i++) {
    let num1 = Number(blue[i]);
    if (blue.includes(String(num1 + 10))) {
      if (blue.includes(String(num1 + 20))) {
        if (blue.includes(String(num1 + 30))) {
          bluewins();
        }
      };
    } else if (blue.includes(String(num1 + 1))) {
      if (blue.includes(String(num1 + 2))) {
        if (blue.includes(String(num1 + 3))) {
          bluewins();
        }
      }
    } else if (blue.includes(String(num1 + 9))) {
      if (blue.includes(String(num1 + 18))) {
        if (blue.includes(String(num1 + 27))) {
          bluewins();
        }
      }
    } else if (blue.includes(String(num1 + 11))) {
      if (blue.includes(String(num1 + 22))) {
        if (blue.includes(String(num1 + 33))) {
          bluewins();
        }
      }
    }
  }
}


setId = setInterval(checkWinner, 100);
