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
let winCards1 = ['04','14','24','34']
let winCards2 = ['14','24','34','44']
let winCards3 = ['24','34','44','54']
let winCards4 = ['34','44','54','54']
let winCards5 = ['44','54','64','74']
let winCards6 = ['03','13','23','33']
let winCards7 = ['13','23','33','43']
let winCards8 = ['23','33','43','53']
let winCards9 = ['33','43','53','53']
let winCards10 = ['43','53','63','73']
let winCards11 = ['02','12','22','32']
let winCards12 = ['12','22','32','42']
let winCards13 = ['22','32','42','52']
let winCards14 = ['32','42','52','52']
let winCards15 = ['42','52','62','72']
let winCards16 = ['01','11','21','31']
let winCards17 = ['11','21','31','41']
let winCards18 = ['21','31','41','51']
let winCards19 = ['31','41','51','51']
let winCards20 = ['41','51','61','71']
let winCards21 = ['00','10','20','30']
let winCards22 = ['10','20','30','40']
let winCards23 = ['20','30','40','50']
let winCards24 = ['30','40','50','50']
let winCards25 = ['40','50','60','70']
let winCards26 = ['00','01','02','03']
let winCards27 = ['01','02','03','04']
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
let winCards42 = ['04','13','22','31']
let winCards43 = ['14','23','32','41']
let winCards44 = ['24','33','42','51']
let winCards45 = ['34','43','52','61']
let winCards46 = ['44','53','62','62']
let winCards47 = ['03','12','21','30']
let winCards48 = ['13','22','31','40']
let winCards49 = ['23','32','41','50']
let winCards50 = ['33','42','51','60']
let winCards51 = ['43','52','61','70']
let winCards52 = ['74','63','52','41']
let winCards53 = ['64','53','42','31']
let winCards54 = ['54','43','32','21']
let winCards55 = ['44','33','22','11']
let winCards56 = ['34','23','12','01']
let winCards57 = ['73','62','51','40']
let winCards58 = ['63','52','41','30']
let winCards59 = ['53','42','31','20']
let winCards60 = ['43','32','21','10']
let winCards61 = ['33','22','11','00']

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

function checkWinner() {
  let i = 0;
  if (red[i] === winCards1[0]) {
    if (red[i + 1] === winCards1[1]) {
      if (red[i + 2] === winCards1[2]) {
        if (red[i + 3] === winCards1[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards2[0]) {
    if (red[i + 1] === winCards2[1]) {
      if (red[i + 2] === winCards2[2]) {
        if (red[i + 3] === winCards2[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards3[0]) {
    if (red[i + 1] === winCards3[1]) {
      if (red[i + 2] === winCards3[2]) {
        if (red[i + 3] === winCards3[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards4[0]) {
    if (red[i + 1] === winCards4[1]) {
      if (red[i + 2] === winCards4[2]) {
        if (red[i + 3] === winCards4[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards5[0]) {
    if (red[i + 1] === winCards5[1]) {
      if (red[i + 2] === winCards5[2]) {
        if (red[i + 3] === winCards5[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards6[0]) {
    if (red[i + 1] === winCards6[1]) {
      if (red[i + 2] === winCards6[2]) {
        if (red[i + 3] === winCards6[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards7[0]) {
    if (red[i + 1] === winCards7[1]) {
      if (red[i + 2] === winCards7[2]) {
        if (red[i + 3] === winCards7[3]) {
          redwins();
        }
      }
    }
  
  } else if (red[i] === winCards8[0]) {
    if (red[i + 1] === winCards8[1]) {
      if (red[i + 2] === winCards8[2]) {
        if (red[i + 3] === winCards8[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards9[0]) {
    if (red[i + 1] === winCards9[1]) {
      if (red[i + 2] === winCards9[2]) {
        if (red[i + 3] === winCards9[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards10[0]) {
    if (red[i + 1] === winCards10[1]) {
      if (red[i + 2] === winCards10[2]) {
        if (red[i + 3] === winCards10[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards11[0]) {
    if (red[i + 1] === winCards11[1]) {
      if (red[i + 2] === winCards11[2]) {
        if (red[i + 3] === winCards11[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards12[0]) {
    if (red[i + 1] === winCards12[1]) {
      if (red[i + 2] === winCards12[2]) {
        if (red[i + 3] === winCards12[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards13[0]) {
    if (red[i + 1] === winCards13[1]) {
      if (red[i + 2] === winCards13[2]) {
        if (red[i + 3] === winCards13[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards14[0]) {
    if (red[i + 1] === winCards14[1]) {
      if (red[i + 2] === winCards14[2]) {
        if (red[i + 3] === winCards14[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards15[0]) {
    if (red[i + 1] === winCards15[1]) {
      if (red[i + 2] === winCards15[2]) {
        if (red[i + 3] === winCards15[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards16[0]) {
    if (red[i + 1] === winCards16[1]) {
      if (red[i + 2] === winCards16[2]) {
        if (red[i + 3] === winCards16[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards17[0]) {
    if (red[i + 1] === winCards17[1]) {
      if (red[i + 2] === winCards17[2]) {
        if (red[i + 3] === winCards17[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards18[0]) {
    if (red[i + 1] === winCards18[1]) {
      if (red[i + 2] === winCards18[2]) {
        if (red[i + 3] === winCards18[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards19[0]) {
    if (red[i + 1] === winCards19[1]) {
      if (red[i + 2] === winCards19[2]) {
        if (red[i + 3] === winCards19[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards20[0]) {
    if (red[i + 1] === winCards20[1]) {
      if (red[i + 2] === winCards20[2]) {
        if (red[i + 3] === winCards20[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards21[0]) {
    if (red[i + 1] === winCards21[1]) {
      if (red[i + 2] === winCards21[2]) {
        if (red[i + 3] === winCards21[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards22[0]) {
    if (red[i + 1] === winCards22[1]) {
      if (red[i + 2] === winCards22[2]) {
        if (red[i + 3] === winCards22[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards23[0]) {
    if (red[i + 1] === winCards23[1]) {
      if (red[i + 2] === winCards23[2]) {
        if (red[i + 3] === winCards23[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards24[0]) {
    if (red[i + 1] === winCards24[1]) {
      if (red[i + 2] === winCards24[2]) {
        if (red[i + 3] === winCards24[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards25[0]) {
    if (red[i + 1] === winCards25[1]) {
      if (red[i + 2] === winCards25[2]) {
        if (red[i + 3] === winCards25[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards26[0]) {
    if (red[i + 1] === winCards26[1]) {
      if (red[i + 2] === winCards26[2]) {
        if (red[i + 3] === winCards26[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards27[0]) {
    if (red[i + 1] === winCards27[1]) {
      if (red[i + 2] === winCards27[2]) {
        if (red[i + 3] === winCards27[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards28[0]) {
    if (red[i + 1] === winCards28[1]) {
      if (red[i + 2] === winCards28[2]) {
        if (red[i + 3] === winCards28[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards29[0]) {
    if (red[i + 1] === winCards29[1]) {
      if (red[i + 2] === winCards29[2]) {
        if (red[i + 3] === winCards29[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards30[0]) {
    if (red[i + 1] === winCards30[1]) {
      if (red[i + 2] === winCards30[2]) {
        if (red[i + 3] === winCards30[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards31[0]) {
    if (red[i + 1] === winCards31[1]) {
      if (red[i + 2] === winCards31[2]) {
        if (red[i + 3] === winCards31[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards32[0]) {
    if (red[i + 1] === winCards32[1]) {
      if (red[i + 2] === winCards32[2]) {
        if (red[i + 3] === winCards32[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards33[0]) {
    if (red[i + 1] === winCards33[1]) {
      if (red[i + 2] === winCards33[2]) {
        if (red[i + 3] === winCards33[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards34[0]) {
    if (red[i + 1] === winCards34[1]) {
      if (red[i + 2] === winCards34[2]) {
        if (red[i + 3] === winCards34[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards35[0]) {
    if (red[i + 1] === winCards35[1]) {
      if (red[i + 2] === winCards35[2]) {
        if (red[i + 3] === winCards35[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards36[0]) {
    if (red[i + 1] === winCards36[1]) {
      if (red[i + 2] === winCards36[2]) {
        if (red[i + 3] === winCards36[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards37[0]) {
    if (red[i + 1] === winCards37[1]) {
      if (red[i + 2] === winCards37[2]) {
        if (red[i + 3] === winCards37[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards38[0]) {
    if (red[i + 1] === winCards38[1]) {
      if (red[i + 2] === winCards38[2]) {
        if (red[i + 3] === winCards38[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards39[0]) {
    if (red[i + 1] === winCards39[1]) {
      if (red[i + 2] === winCards39[2]) {
        if (red[i + 3] === winCards39[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards40[0]) {
    if (red[i + 1] === winCards40[1]) {
      if (red[i + 2] === winCards40[2]) {
        if (red[i + 3] === winCards40[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards41[0]) {
    if (red[i + 1] === winCards41[1]) {
      if (red[i + 2] === winCards41[2]) {
        if (red[i + 3] === winCards41[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards42[0]) {
    if (red[i + 1] === winCards42[1]) {
      if (red[i + 2] === winCards42[2]) {
        if (red[i + 3] === winCards42[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards43[0]) {
    if (red[i + 1] === winCards43[1]) {
      if (red[i + 2] === winCards43[2]) {
        if (red[i + 3] === winCards43[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards44[0]) {
    if (red[i + 1] === winCards44[1]) {
      if (red[i + 2] === winCards44[2]) {
        if (red[i + 3] === winCards44[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards45[0]) {
    if (red[i + 1] === winCards45[1]) {
      if (red[i + 2] === winCards45[2]) {
        if (red[i + 3] === winCards45[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards46[0]) {
    if (red[i + 1] === winCards46[1]) {
      if (red[i + 2] === winCards46[2]) {
        if (red[i + 3] === winCards46[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards47[0]) {
    if (red[i + 1] === winCards47[1]) {
      if (red[i + 2] === winCards47[2]) {
        if (red[i + 3] === winCards47[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards48[0]) {
    if (red[i + 1] === winCards48[1]) {
      if (red[i + 2] === winCards48[2]) {
        if (red[i + 3] === winCards48[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards49[0]) {
    if (red[i + 1] === winCards49[1]) {
      if (red[i + 2] === winCards49[2]) {
        if (red[i + 3] === winCards49[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards50[0]) {
    if (red[i + 1] === winCards50[1]) {
      if (red[i + 2] === winCards50[2]) {
        if (red[i + 3] === winCards50[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards51[0]) {
    if (red[i + 1] === winCards51[1]) {
      if (red[i + 2] === winCards51[2]) {
        if (red[i + 3] === winCards51[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards52[0]) {
    if (red[i + 1] === winCards52[1]) {
      if (red[i + 2] === winCards52[2]) {
        if (red[i + 3] === winCards52[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards53[0]) {
    if (red[i + 1] === winCards53[1]) {
      if (red[i + 2] === winCards53[2]) {
        if (red[i + 3] === winCards53[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards54[0]) {
    if (red[i + 1] === winCards54[1]) {
      if (red[i + 2] === winCards54[2]) {
        if (red[i + 3] === winCards54[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards55[0]) {
    if (red[i + 1] === winCards55[1]) {
      if (red[i + 2] === winCards55[2]) {
        if (red[i + 3] === winCards55[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards56[0]) {
    if (red[i + 1] === winCards56[1]) {
      if (red[i + 2] === winCards56[2]) {
        if (red[i + 3] === winCards56[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards57[0]) {
    if (red[i + 1] === winCards57[1]) {
      if (red[i + 2] === winCards57[2]) {
        if (red[i + 3] === winCards57[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards58[0]) {
    if (red[i + 1] === winCards58[1]) {
      if (red[i + 2] === winCards58[2]) {
        if (red[i + 3] === winCards58[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards59[0]) {
    if (red[i + 1] === winCards59[1]) {
      if (red[i + 2] === winCards59[2]) {
        if (red[i + 3] === winCards59[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards60[0]) {
    if (red[i + 1] === winCards60[1]) {
      if (red[i + 2] === winCards60[2]) {
        if (red[i + 3] === winCards60[3]) {
          redwins();
        }
      }
    }
  } else if (red[i] === winCards61[0]) {
    if (red[i + 1] === winCards61[1]) {
      if (red[i + 2] === winCards61[2]) {
        if (red[i + 3] === winCards61[3]) {
          redwins();
        }
      }
    }
  }

}

setIntervalId = setInterval(checkWinner, 100);



