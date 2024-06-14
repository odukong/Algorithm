const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (Number(input[0]) == input.length - 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const MAX = Number(input.shift()); // 마을 크기
  let maps = input.map((v) => v.split(" ").map(Number)); // 마을 지도
  let visited = Array.from(Array(MAX), () => Array(MAX).fill(false)); // 방문여부
  let dt = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  let count = 0;

  for (let i = 0; i < MAX; i++) {
    for (let j = 0; j < MAX; j++) {
      if (maps[i][j] == 1 && !visited[i][j]) {
        count++;
        visited[i][j] = true;

        // 현 위치의 집에서 인접한 집 확인(BFS) - 발전기 한 개로 사용
        let queue = [[i, j]];
        while (queue.length) {
          let [curX, curY] = queue.shift();

          for (let c = 0; c < 4; c++) {
            let nextX = curX + dt[c][0];
            let nextY = curY + dt[c][1];

            if (
              nextX >= 0 &&
              nextX < MAX &&
              nextY >= 0 &&
              nextY < MAX &&
              maps[nextX][nextY] == 1 &&
              visited[nextX][nextY] == false
            ) {
              queue.push([nextX, nextY]);
              visited[nextX][nextY] = true;
            }
          }
        }
      }
    }
  }

  console.log(count);
});
