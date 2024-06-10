// Run by Node.js
const readline = require("readline");

const solution = (size, distance, arr) => {
  let ants = [];
  let honeys = [];
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 1) {
        ants.push([i, j]);
      } else if (arr[i][j] == 2) {
        honeys.push([i, j]);
      }
    }
  }
  for (let ant of ants) {
    for (let honey of honeys) {
      const d =
        Math.abs(ant[0] - honey[0]) + Math.abs(ant[1] - honey[1]) <= distance;
      if (d) {
        result++;
        break;
      }
    }
  }
  return result;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let size = 0;
  let distance = 0;
  let arr = [];
  for await (const line of rl) {
    if (size == 0) {
      const [a, b] = line.split(" ").map((v) => Number(v));
      size = a;
      distance = b;
    } else {
      arr.push(line.split(" ").map((v) => Number(v)));
    }
    rl.close();
  }
  console.log(solution(size, distance, arr));
  process.exit();
})();
