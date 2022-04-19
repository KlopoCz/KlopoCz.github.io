export const determineWinner = (index, board, player) => {
  const x = Number(index[0]);
  const y = Number(index[1]);
  const playerNumber = player === true ? 1 : 2;
  const savePosiblePositions = (arr) => {
    let validPositions = [];
    for (let i = 0; i < arr.length; i = i + 2) {
      if (arr[i] < 0 || arr[i] > board.length - 1 || arr[i + 1] < 0 || arr[i + 1] > board.length - 1)
        return validPositions;
      validPositions = [...validPositions, [arr[i], arr[i + 1]]];
    }
    return validPositions;
  };
  let right = savePosiblePositions([x, y + 1, x, y + 2, x, y + 3, x, y + 4, x, y + 5]);
  let left = savePosiblePositions([x, y - 1, x, y - 2, x, y - 3, x, y - 4, x, y - 5]);
  let down = savePosiblePositions([x + 1, y, x + 2, y, x + 3, y, x + 4, y, x + 5, y]);
  let up = savePosiblePositions([x - 1, y, x - 2, y, x - 3, y, x - 4, y, x - 5, y]);
  let rightDown = savePosiblePositions([x + 1, y + 1, x + 2, y + 2, x + 3, y + 3, x + 4, y + 4, x + 5, y - 5]);
  let rightUp = savePosiblePositions([x - 1, y + 1, x - 2, y + 2, x - 3, y + 3, x - 4, y + 4, x - 5, y + 5]);
  let leftUp = savePosiblePositions([x - 1, y - 1, x - 2, y - 2, x - 3, y - 3, x - 4, y - 4, x - 5, y - 5]);
  let leftDown = savePosiblePositions([x + 1, y - 1, x + 2, y - 2, x + 3, y - 3, x + 4, y - 4, x + 5, y - 4]);

  const countTheLines = (arr) => {
    let score = 0;
    if (arr.length !== 0) {
      for (let a = 0; a < arr.length; a++) {
        if (board[arr[a][0]][arr[a][1]] === playerNumber) score++;
        else return score;
      }
    }

    return score;
  };
  const getUttermost = (arr) => {
    let last = [x, y];
    if (arr.length === 0) return last;
    else {
      for (let a = 0; a < arr.length; a++) {
        if (board[arr[a][0]][arr[a][1]] === playerNumber) last = [arr[a][0], arr[a][1]];
        else return last;
      }
    }
    return last;
  };

  let rowScore = countTheLines(left) + countTheLines(right);
  let columnScore = countTheLines(up) + countTheLines(down);
  let diagonalUpScore = countTheLines(rightUp) + countTheLines(leftDown);
  let diagonalDownScore = countTheLines(leftUp) + countTheLines(rightDown);

  if (rowScore === 4) return { status: true, uttermost: [getUttermost(right), getUttermost(left)] };
  if (columnScore === 4) return { status: true, uttermost: [getUttermost(up), getUttermost(down)] };
  if (diagonalUpScore === 4) return { status: true, uttermost: [getUttermost(rightUp), getUttermost(leftDown)] };
  if (diagonalDownScore === 4) return { status: true, uttermost: [getUttermost(leftUp), getUttermost(rightDown)] };
  return { status: false, uttermost: [] };
};
