let board = Array(9).fill(null);
let currentPlayer = 'X';

function makeMove(index) {
  if (!board[index] && !isGameOver()) {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
    document.getElementsByClassName('cell')[index].style.color = currentPlayer === 'X' ? 'blue' : 'red';
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (!isGameOver() && currentPlayer === 'O') {
      makeComputerMove();
    }
  }
}

function makeComputerMove() {
  let availableIndices = board.reduce((indices, val, i) => !val ? indices.concat(i) : indices, []);
  let randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
  makeMove(randomIndex);
}

function resetBoard() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  let cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.textContent = '';
    cell.style.color = '';
  }
}

function isGameOver() {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    if (combination.every(index => board[index] === 'X')) {
      alert("You won!");
      return true;
    } else if (combination.every(index => board[index] === 'O')) {
      alert("You lost!");
      return true;
    }
  }

  if (!board.includes(null)) {
    alert("It's a draw!");
    return true;
  }

  return false;
}
