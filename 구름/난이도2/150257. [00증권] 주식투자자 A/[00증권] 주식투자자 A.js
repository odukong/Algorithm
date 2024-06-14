// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let countN = 0;
  let arr = [];
  for await (const line of rl) {
    arr.push(line);
    countN++;
    if (countN - 1 == Number(arr[0])) {
      rl.close();
    }
  }

  let max = {};
  let N = Number(arr.shift());
  arr = arr.map((v) =>
    [...v.split(" ")].reduce((a, b) => Math.floor(1 * a * b * 10) / 10)
  );

  for (let i = 0; i < arr.length; i++) {
    max[i + 1] = arr[i];
  }

  console.log(
    Object.keys(max)
      .sort((a, b) => {
        return max[a] != max[b] ? max[b] - max[a] * 1 : a - b * 1;
      })
      .join(" ")
  );
})();
