// JavaScript 主文件
const boardSize = 4;
let board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(0));

function generateBoard() {
  const boardElement = document.getElementById("board");
  boardElement.innerHTML = ""; // 清空棋盘
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = board[row][col] === 0 ? "" : board[row][col];
      boardElement.appendChild(cell);
    }
  }
}

function addRandomTile() {
  const emptyCells = [];
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      if (board[row][col] === 0) emptyCells.push({ row, col });
    }
  }
  if (emptyCells.length > 0) {
    const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[row][col] = Math.random() < 0.9 ? 2 : 4;
  }
}

function handleKeyPress(event) {
  const key = event.key;
  if (key === "ArrowUp") moveUp();
  else if (key === "ArrowDown") moveDown();
  else if (key === "ArrowLeft") moveLeft();
  else if (key === "ArrowRight") moveRight();
  addRandomTile();
  generateBoard();
}

// 以下为滑动逻辑的示例，详细逻辑需要实现
function moveUp() {
  // TODO: 实现向上滑动
  console.log("Move Up");
}

function moveDown() {
  // TODO: 实现向下滑动
  console.log("Move Down");
}

function moveLeft() {
  // TODO: 实现向左滑动
  console.log("Move Left");
}

function moveRight() {
  // TODO: 实现向右滑动
  console.log("Move Right");
}

// 初始化棋盘
document.addEventListener("DOMContentLoaded", () => {
  addRandomTile();
  addRandomTile();
  generateBoard();
  document.addEventListener("keydown", handleKeyPress);
});
