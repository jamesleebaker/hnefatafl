const NUMBER_OF_CELLS = 121;
const WIN_SPOTS_CELL_NUMERS = [1, 11, 111, 121];
const KING_SPOT = 61;

const ATTACKER_DEFAULT_POSITIONS = {
  leftGroup: [
    [1, 4],
    [1, 5],
    [1, 6],
    [2, 6],
    [1, 7],
    [1, 8],
  ],
  topGroup: [
    [4, 1],
    [5, 1],
    [6, 1],
    [6, 2],
    [7, 1],
    [8, 1]
    [9, 1]
  ],
  rightGroup: [
    [11, 4],
    [11, 5],
    [11, 6],
    [10, 6],
    [11, 7],
    [11, 8],
  ],
  bottomGroup: [
    [4, 11],
    [5, 11],
    [6, 11],
    [6, 10],
    [7, 11],
    [8, 11]
    [9, 11]
  ],
}

const DEFENDER_DEFAULT_POSITIONS = [
  [6, 4],
  [5, 5],
  [6, 5],
  [7, 5],
  [4, 6],
  [5, 6],
  [6, 6],
  [7, 6],
  [8, 6],
  [5, 7],
  [6, 7],
  [7, 7],
  [6, 8],
];

function mapCellIndexToCoordinates(cellIndex) {
  if (cellIndex > NUMBER_OF_CELLS) {
    throw new RangeError('The cell is outside the number of cells in the board')
  }

  if (cellIndex < 11) { 
    return {
      x: cellIndex,
      y: 1,
    };
  }
  
  if (cellIndex % 11 == 0) {
    return {
      x: 11,
      y: Math.ceil(cellIndex / 11),
    }
  }

  return {
    x: cellIndex % 11,
    y: Math.ceil(cellIndex / 11),
  }
}

function mapCoordinatesToCellIndex(x, y) {
  if (y === 1) {
    return x;
  }

  return ((y - 1) * 11) + x;
}

function isWinSpot(cellNumber) {
  return WIN_SPOTS_CELL_NUMERS.indexOf(cellNumber) > -1;
}

function generateBoardCellElements() {
  const boardElement = document.getElementById('board');
  const boardFragment = document.createDocumentFragment();

  for (let i = 1; i <= NUMBER_OF_CELLS; i++) {
    const { x, y }= mapCellIndexToCoordinates(i);
    const cellElement = document.createElement('div');
    cellElement.setAttribute('data-x', x);
    cellElement.setAttribute('data-y', y);
    cellElement.classList.add('cell');

    if (isWinSpot(i)) {
      cellElement.classList.add('black');
      cellElement.classList.add('win');
      boardFragment.appendChild(cellElement);
      continue;
    } 

    if (i === KING_SPOT) {
      cellElement.classList.add('black');
      boardFragment.appendChild(cellElement);
      continue;
    }

    // TODO: Improve semantic of naming
    cellElement.classList.add('white');
    boardFragment.appendChild(cellElement);
  }

  boardElement.appendChild(boardFragment);
}

function generatesPlayerPieces() {
  console.log('TO DO!');
}

generateBoardCellElements();
generatesPlayerPieces();