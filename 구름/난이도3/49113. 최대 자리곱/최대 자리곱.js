// Run by Node.js
const readline = require("readline");

const solution = (n) => {
  var num = Number(n);
  var max = [...n].reduce((acc, cur) => (acc *= Number(cur)), 1);

  for (let i = 0; i < n.length - 1; i++) {
    let comp = num - (num % 10 ** (i + 1)) - 1;
    comp = [...String(comp)].reduce((acc, cur) => (acc *= Number(cur)), 1);

    if (max < comp) max = comp;
  }

  return max;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    console.log(solution(line));
    rl.close();
  }

  process.exit();
})();
