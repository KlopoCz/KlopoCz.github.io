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
  const randomizeLine = (direction, sideOne, sideTwo) => {
    let randomY = Math.random();
    let randomY1 = Math.random();
    let randomY2 = Math.random();
    let randomX = Math.random();
    let randomX1 = Math.random();
    let randomX2 = Math.random();
    let a = getUttermost(sideOne);
    let b = getUttermost(sideTwo);
    const addLength = 0.3;
    const addLengthD = 0.2;
    a[0] += randomY < 0.5 ? randomY1 * -0.1 : randomY1 * 0.1;
    a[1] += randomX < 0.5 ? randomX1 * -0.1 : randomX1 * 0.1;
    b[0] += randomY < 0.5 ? randomY2 * 0.1 : randomY2 * -0.1;
    b[1] += randomX < 0.5 ? randomX2 * 0.1 : randomX2 * -0.1;
    if (direction === "row") {
      a[1] += addLength;
      b[1] -= addLength;
      return [a, b];
    }
    if (direction === "column") {
      a[0] -= addLength;
      b[0] += addLength;
      return [a, b];
    }
    if (direction === "diagonalUp") {
      a[1] += addLengthD;
      a[0] -= addLengthD;
      b[1] -= addLengthD;
      b[0] += addLengthD;
      return [a, b];
    }
    if (direction === "diagonalDown") {
      a[1] += addLengthD;
      a[0] += addLengthD;
      b[1] -= addLengthD;
      b[0] -= addLengthD;
      return [a, b];
    }
  };

  let rowScore = countTheLines(left) + countTheLines(right);
  let columnScore = countTheLines(up) + countTheLines(down);
  let diagonalUpScore = countTheLines(rightUp) + countTheLines(leftDown);
  let diagonalDownScore = countTheLines(leftUp) + countTheLines(rightDown);

  if (rowScore === 4) return { status: true, uttermost: randomizeLine("row", right, left) };
  if (columnScore === 4) return { status: true, uttermost: randomizeLine("column", up, down) };
  if (diagonalUpScore === 4) return { status: true, uttermost: randomizeLine("diagonalUp", rightUp, leftDown) };
  if (diagonalDownScore === 4) return { status: true, uttermost: randomizeLine("diagonalDown", rightDown, leftUp) };
  return { status: false, uttermost: [] };
};
