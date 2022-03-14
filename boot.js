function jacksCode() {
  //code used to set up the board
  const setUp = [
    '0',
    '0',
    '0',
    'b',
    'b',
    'b',
    'b',
    'b',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    'b',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    'b',
    '0',
    '0',
    '0',
    '0',
    'w',
    '0',
    '0',
    '0',
    '0',
    'b',
    'b',
    '0',
    '0',
    '0',
    'w',
    'w',
    'w',
    '0',
    '0',
    '0',
    'b',
    'b',
    'b',
    '0',
    'w',
    'w',
    'k',
    'w',
    'w',
    '0',
    'b',
    'b',
    'b',
    '0',
    '0',
    '0',
    'w',
    'w',
    'w',
    '0',
    '0',
    '0',
    'b',
    'b',
    '0',
    '0',
    '0',
    '0',
    'w',
    '0',
    '0',
    '0',
    '0',
    'b',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    'b',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    'b',
    'b',
    'b',
    'b',
    'b',
    '0',
    '0',
    '0'
  ];

  //function I use for debugging
  function scream() {
    console.log('AAAAAAAAAAAAAA!!!!!');
  }

  let FEN = setUp;
  let turn = true;
  let playerPiece;
  let selectedPiece = {
    turn: true,
    peiceId: -1,
    indexOfBoardPiece: 1,
    space1: false,
    space2: false,
    space3: false,
    space4: false,
    space5: false,
    space6: false,
    space7: false,
    space8: false,
    space9: false,
    space10: false,
    spacem1: false,
    spacem2: false,
    spacem3: false,
    spacem4: false,
    spacem5: false,
    spacem6: false,
    spacem7: false,
    spacem8: false,
    spacem9: false,
    spacem10: false,
    space11: false,
    space22: false,
    space33: false,
    space44: false,
    space55: false,
    space66: false,
    space77: false,
    space88: false,
    space99: false,
    space110: false,
    spacem11: false,
    spacem22: false,
    spacem33: false,
    spacem44: false,
    spacem55: false,
    spacem66: false,
    spacem77: false,
    spacem88: false,
    spacem99: false,
    spacem110: false
  };
  let whitePieces = document.getElementsByClassName('defender');
  let blackPieces = document.getElementsByClassName('attacker');
  let spots = document.getElementsByClassName('piece');
  draw();

  //translates the FEN code input into the board layout
  function draw() {
    j = 1;
    for (let i = 0; i <= FEN.length; i++) {
      if (FEN[i] == 'b') {
        document.getElementById('*' + (i + 1)).classList.toggle('attacker');
      } else if (FEN[i] == 'w') {
        document.getElementById('*' + (i + 1)).classList.toggle('defender');
      } else if (FEN[i] == 'k') {
        document.getElementById('*' + (i + 1)).id = 'king-piece';
      }
      j++;
    }
  }

  //gives the white pieces on event listeners
  for (var i = 0; i < whitePieces.length; i++) {
    whitePieces[i].addEventListener('click', function () {
      console.log('White!');
    });
  }

  //gives the black pieces on event listeners
  for (var i = 0; i < blackPieces.length; i++) {
    blackPieces[i].addEventListener('click', function () {
      console.log('Black!');
    });
  }

  //gives the king piece on event listeners.
  document.getElementById('king-piece').addEventListener('click', function () {
    console.log('The King!');
    scream();
  });
}

jacksCode();