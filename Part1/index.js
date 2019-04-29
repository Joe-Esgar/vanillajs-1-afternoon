console.log("Hello, World");
let board = [];
let win = false;
function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);
  if (clickedElement.innerText) {
    return;
  }
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "0";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "0";
    board[clickedId] = "0";
  }
  console.log(board);

  const topLeft = board[0];
  const topMid = board[1];
  const topRight = board[2];
  const midLeft = board[3];
  const midMid = board[4];
  const midRight = board[5];
  const botLeft = board[6];
  const botMid = board[7];
  const botRight = board[8];

  if (topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (midLeft !== undefined && midLeft === midMid && midLeft === midRight) {
    alert(`${midLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (botLeft !== undefined && botLeft === botMid && botLeft === botRight) {
    alert(`${botLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
    alert(`${topLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (topMid !== undefined && topMid === midMid && topMid === botMid) {
    alert(`${topMid} is the winner`);
    win = true;
    reset();
    return;
  }
  if (
    topRight !== undefined &&
    topRight === midRight &&
    topRight === botRight
  ) {
    alert(`${topRight} is the winner`);
    win = true;
    reset();
    return;
  }
  if (topLeft !== undefined && topLeft === midMid && topLeft === botRight) {
    alert(`${topLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  if (botLeft !== undefined && botLeft === midMid && botLeft === topRight) {
    alert(`${botLeft} is the winner`);
    win = true;
    reset();
    return;
  }
  console.log(board);
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
    win = true;
    reset();
  }
}

function reset() {
  board = [];
  console.log(board);
  const resetTags = document.getElementsByTagName("td");
  for (let i = 0; i < resetTags.length; i++) {
    resetTags[i].innerText = "";
  }
}
