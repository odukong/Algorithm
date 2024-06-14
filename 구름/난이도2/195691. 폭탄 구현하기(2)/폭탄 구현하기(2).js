const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (
    input[0]
      .split(" ")
      .map(Number)
      .reduce((a, b) => a + b) ===
    input.length - 1
  ) {
    rl.close();
  }
});

rl.on("close", () => {
  let temp = input.shift();
  temp = temp.split(" ");
  const SIZE = Number(temp[0]);
  const TIME = Number(temp[1]);
  let maps = []; // 지도
  let point = []; // 떨어뜨릴 지점
  let dt = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  let max = 0;

  for (let i = 0; i < SIZE; i++) {
    maps.push(input[i].split(" "));
  }
  for (let j = SIZE; j < SIZE + TIME; j++) {
    point.push(input[j].split(" ").map(Number));
  }

  let arr = Array.from(Array(SIZE), () => Array(SIZE).fill(0)); // 폭탄 값 더하기 배열
  // 폭탄 구현
  for (let i = 0; i < TIME; i++) {
    let curX = point[i][0] - 1;
    let curY = point[i][1] - 1;

    if (maps[curX][curY] == "@") {
      arr[curX][curY] += 2;
    } else if (maps[curX][curY] != "#") {
      arr[curX][curY] += 1;
    }
    if (arr[curX][curY] > max) max = arr[curX][curY];

    // 상하좌우 체크
    for (let j = 0; j < 4; j++) {
      let nextX = curX + dt[j][0];
      let nextY = curY + dt[j][1];

      if (nextX >= 0 && nextX < SIZE && nextY >= 0 && nextY < SIZE) {
        if (maps[nextX][nextY] == "@") {
          arr[nextX][nextY] += 2;
        } else if (maps[nextX][nextY] != "#") {
          arr[nextX][nextY] += 1;
        }

        if (arr[nextX][nextY] > max) max = arr[nextX][nextY];
      }
    }
  }

  console.log(max);
});
