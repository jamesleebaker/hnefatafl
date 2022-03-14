const NUMBER_OF_CELLS = 121;

const WIN_SPOTS = [
  [1, 1],
  [1, 11],
  [11, 1]
  [11, 11]
];

const ATTACKER_MATRIX = {
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

const DEFENDER_MATRIX = [
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

const KING_PIECE = [6,6];

function mapCellIndexToCoordinates(index) {
  if (index > NUMBER_OF_CELLS) {
    throw new RangeError('The cell is outside the number of cells in the board')
  }

  if (index < 11) { 
    return {
      x: index,
      y: 1,
    };
  }
  
  if (index % 11 == 0){
    return {
      x: 11,
      y: Math.ceil(index / 11),
    }
  }

  return {
    x: index % 11,
    y: Math.ceil(index / 11),
  }
}

function generateCells() {
  const boardElement = document.getElementById('board');
  const boardFragment = document.createDocumentFragment();

  for(let i = 1; i <= NUMBER_OF_CELLS; i++) {
    const currentCellCoordinates = mapCellIndexToCoordinates(i);
  }
}

generateCells();