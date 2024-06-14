// Run by Node.js
const readline = require("readline");

const solution = (N, M, height, rainyDay) => {
  let recent = Array(height.length).fill(0);
  for (let i = 1; i <= M; i++) {
    for (let j = rainyDay[i - 1][0]; j <= rainyDay[i - 1][1]; j++) {
      height[j - 1] += 1;
      recent[j - 1] = i;
    }
    // 3일째 배수시스템 확인
    if (i % 3 == 0) {
      for (let z = 0; z < N; z++) {
        // 2일 이내 비가 내린 경우만 배수시스템 실행
        if (i - recent[z] <= 2) {
          height[z] -= 1;
        }
      }
    }
  }
  return height.join(" ");
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let countM = 0;
  let N = 0;
  let M = 0;
  let height = null;
  let rainyDay = [];
  for await (const line of rl) {
    if (!N && !M) {
      let temp = line.split(" ").map(Number);
      N = temp[0];
      M = temp[1];
    } else if (height == null) {
      height = line.split(" ").map(Number);
    } else {
      rainyDay.push(line.split(" ").map(Number));
    }
    if (countM == M) {
      rl.close();
    }
  }

  console.log(solution(N, M, height, rainyDay));
  process.exit();
})();
