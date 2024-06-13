// Run by Node.js
const readline = require("readline");

// ball이 있는 경우, 처리 함수
const ballFunction = (answer, sbf) => {
  let temp = [];
  for (let i = 0; i < 4; i++) {
    if (sbf[i] !== "s") {
      temp.push(answer[i]);
    }
  }
  temp.unshift(temp.pop());
  answer = answer.split("");
  for (let j = 0; j < 4; j++) {
    if (sbf[j] !== "s") {
      answer[j] = temp.shift();
    }
  }
  answer = answer.join("");

  return answer;
};

// baseball game start
const baseball = (correct, answer) => {
  let count = 0;
  while (true) {
    let sbf = {};
    let isBall = false;
    // 입력값에 대한 strike, ball, fail 상태 판별
    for (let i = 0; i < 4; i++) {
      if (correct[i] == answer[i]) {
        sbf[i] = "s";
      } else {
        if (correct.includes(answer[i])) {
          sbf[i] = "b";
          isBall = true;
        }
      }

      if (sbf[i] == null) {
        sbf[i] == "f";
        answer = answer.split("");
        answer[i] = String((answer[i] * 1 + 1) % 10);
        while (answer.indexOf(answer[i]) !== answer.lastIndexOf(answer[i])) {
          answer[i] = String((answer[i] * 1 + 1) % 10);
        }
        answer = answer.join("");
      }
    }

    // ball이 있는 경우만 처리
    if (isBall) {
      answer = ballFunction(answer, sbf);
    }
    count++;
    // 모두 strike라면 함수 종료
    if (sbf[0] + sbf[1] + sbf[2] + sbf[3] == "ssss") return count;
  }
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let goal = [];

  for await (const line of rl) {
    goal.push(line);
    if (goal.length == 2) {
      rl.close();
    }
  }

  let [correct, answer] = goal;

  console.log(baseball(correct, answer));
})();
