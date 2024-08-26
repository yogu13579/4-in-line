const playBoard = document.querySelector(".play-board");
const line = document.querySelector(".line");
const who = document.querySelector(".turn");
let setIntervalId;
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
let winCards1 = ['0o4','14','24','34']
let winCards2 = ['14','24','34','44']
let winCards3 = ['24','34','44','54']
let winCards4 = ['34','44','54','54']
let winCards5 = ['44','54','64','74']
let winCards6 = ['0o3','13','23','33']
let winCards7 = ['13','23','33','43']
let winCards8 = ['23','33','43','53']
let winCards9 = ['33','43','53','53']
let winCards10 = ['43','53','63','73']
let winCards11 = ['0o2','12','22','32']
let winCards12 = ['12','22','32','42']
let winCards13 = ['22','32','42','52']
let winCards14 = ['32','42','52','52']
let winCards15 = ['42','52','62','72']
let winCards16 = ['0o1','11','21','31']
let winCards17 = ['11','21','31','41']
let winCards18 = ['21','31','41','51']
let winCards19 = ['31','41','51','51']
let winCards20 = ['41','51','61','71']
let winCards21 = ['0o0','10','20','30']
let winCards22 = ['10','20','30','40']
let winCards23 = ['20','30','40','50']
let winCards24 = ['30','40','50','50']
let winCards25 = ['40','50','60','70']
let winCards26 = ['0o0','0o1','0o2','0o3']
let winCards27 = ['0o1','0o2','0o3','0o4']
let winCards28 = ['10','11','12','13']
let winCards29 = ['11','12','13','14']
let winCards30 = ['20','21','22','23']
let winCards31 = ['21','22','23','24']
let winCards32 = ['30','31','32','33']
let winCards33 = ['31','32','33','34']
let winCards34 = ['40','41','42','43']
let winCards35 = ['41','42','43','44']
let winCards36 = ['50','51','52','53']
let winCards37 = ['51','52','53','54']
let winCards38 = ['60','61','62','63']
let winCards39 = ['61','62','63','64']
let winCards40 = ['70','71','72','73']
let winCards41 = ['71','72','73','74']
let winCards42 = ['0o4','13','22','31']
let winCards43 = ['14','23','32','41']
let winCards44 = ['24','33','42','51']
let winCards45 = ['34','43','52','61']
let winCards46 = ['44','53','62','62']
let winCards47 = ['0o3','12','21','30']
let winCards48 = ['13','22','31','40']
let winCards49 = ['23','32','41','50']
let winCards50 = ['33','42','51','60']
let winCards51 = ['43','52','61','70']
let winCards52 = ['74','63','52','41']
let winCards53 = ['64','53','42','31']
let winCards54 = ['54','43','32','21']
let winCards55 = ['44','33','22','11']
let winCards56 = ['34','23','12','0o1']
let winCards57 = ['73','62','51','40']
let winCards58 = ['63','52','41','30']
let winCards59 = ['53','42','31','20']
let winCards60 = ['43','32','21','10']
let winCards61 = ['33','22','11','0o0']

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

function redwins() {
  clearInterval(setIntervalId);
  alert("Game Over! Red is the winner! Press OK to replay...");
  location.reload();
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

function a() {
  console.log(red);
  console.log(blue);
}

setIntervalId = setInterval(a, 100000);



