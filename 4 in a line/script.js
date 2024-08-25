const playBoard = document.querySelector(".play-board");

document.addEventListener("mousemove", getmouse);

function getmouse(event) {
  const rect = playBoard.getBoundingClientRect();

  const realWidth = rect.width / 8;
  const realHight = rect.height / 5;

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  let x = Math.floor(mouseX / realWidth);
  let y = Math.floor(mouseY / realHight);

  if (y < 0) {
    return 1;
  } else if (x > 7) {
    return 1;
  } else if (y > 4) {
    return 1;
  } else if (x < 0) {
    return 1;
  } else {
    console.log(`X : ${x}, Y : ${y}`);
    let html = `<div class="piece" style="grid-area: ${y + 1} / ${x + 1}"></div>`;
    playBoard.innerHTML = html;
  }
}
