function solution(m, n, board) {
  const game = BlockGame(m, n, board);
  return game.getResult();
}

function BlockGame(height, width, board) {
  // 1. 문자열을 분해하여 배열 안에 블록 배치
  const game = board.map((row) => row.split(""));

  // 2. 결과출력
  function getResult() {
    let sum = 0;
    while (true) {
      let num = deBlock();
      if (num == 0) {
        break;
      } else {
        sum += num;
        landBlock();
      }
    }
    return sum;
  }

  // 3. 2x2 블록 제거
  // 제거할 2x2 블록은 Set 객체에 (x,y) 문자열 형태로 저장하며, Set에 저장된 블록은 0으로 명시하여 제거.
  function deBlock() {
    const blocks = new Set();
    for (let i = 0; i < height - 1; i++) {
      for (let j = 0; j < width - 1; j++) {
        if (
          game[i][j] == game[i][j + 1] &&
          game[i][j] == game[i + 1][j] &&
          game[i][j] == game[i + 1][j + 1] &&
          game[i][j] !== "0"
        ) {
          blocks.add(`${i},${j}`);
          blocks.add(`${i},${j + 1}`);
          blocks.add(`${i + 1},${j}`);
          blocks.add(`${i + 1},${j + 1}`);
        }
      }
    }
    if (blocks.size > 0) {
      blocks.forEach((block) => {
        const [x, y] = block.split(",").map(Number);
        game[x][y] = "0";
      });
      return blocks.size;
    }
    return 0;
  }

  // 4. 빈 공간 채우기 (블록내리기)
  function landBlock() {
    for (let i = 0; i < width; i++) {
      const arr = [];
      for (let j = 0; j < height; j++) {
        if (game[j][i] !== "0") {
          arr.push(game[j][i]);
        }
      }
      let len = height - arr.length;
      for (let j = 0; j < height; j++) {
        if (j < len) {
          game[j][i] = "0";
        } else {
          game[j][i] = arr.shift();
        }
      }
    }
  }
  return {
    getResult,
  };
}
