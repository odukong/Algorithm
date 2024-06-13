// Run by Node.js
const readline = require("readline");

const solution = (ranks) => {
  // 1. 12를 먼저 찾은 경우, 그 뒤 문자열에서만 21을 찾는 경우
  let first = ranks.indexOf("12");
  if (ranks.substr(first + 2).indexOf("21") !== -1) return "Yes";

  // 2. 21를 먼저 찾은 경우, 그 뒤 문자열에서만 12을 찾는 경우
  let second = ranks.indexOf("21");
  if (ranks.substr(second + 2).indexOf("12") !== -1) return "Yes";

  return "No";
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    console.log(solution(line));
    rl.close();
  }

  process.exit();
})();
