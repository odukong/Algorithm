const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let commands = {
  L: [0, -1],
  R: [0, 1],
  U: [-1, 0],
  D: [1, 0],
};
Object.freeze(commands);

let N = null;
let players = [];
let board = [];
rl.on("line", (line) => {
  if (N == null) {
    N = Number(line);
  } else if (players.length < 2) {
    players.push(line.split(" ").map(Number));
  } else if (board.length < N) {
    board.push(line.split(" "));
  } else {
    rl.close();
  }
});

function game(position) {
  let count = 1;
  let x = position[0] - 1;
  let y = position[1] - 1;
  let visited = Array.from({ length: N }, () => Array(N).fill(false));

  visited[x][y] = true;
  do {
    let move = parseInt(board[x][y].slice(0, -1));
    let direction = board[x][y].at(-1);

    let moveX = commands[direction][0];
    let moveY = commands[direction][1];
    for (let i = 0; i < move; i++) {
      if (x + moveX < 0) {
        x = N - 1;
      } else if (x + moveX >= N) {
        x = 0;
      } else if (y + moveY < 0) {
        y = N - 1;
      } else if (y + moveY >= N) {
        y = 0;
      } else {
        x += moveX;
        y += moveY;
      }

      if (!visited[x][y]) {
        visited[x][y] = true;
        count++;
      } else {
        return count;
      }
    }
  } while (true);
}

rl.on("close", () => {
  let goorm = game(players[0]);
  let player = game(players[1]);
  let max = goorm < player ? player : goorm;
  console.log(`${goorm < player ? "player" : "goorm"} ${max}`);
});
