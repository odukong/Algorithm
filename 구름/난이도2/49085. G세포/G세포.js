// Run by Node.js
const readline = require("readline");

const solution = (size, total) => {
  if (size == 0) return total;

  let time = 0;
  let temp = 1;
  while (true) {
    if (temp * 2 > size) break;
    if (temp * 2 == size) {
      time++;
      break;
    }
    time++;
    temp *= 2;
  }

  total.push(time);
  return solution(size - 2 ** time, total);
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    let result = solution(Number(line), (total = []));
    console.log(result.length);
    console.log(result.sort((a, b) => a - b).join(" "));
    rl.close();
  }

  process.exit();
})();
