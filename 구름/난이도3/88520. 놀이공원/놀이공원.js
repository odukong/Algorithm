// Run by Node.js
const readline = require("readline");

const trash = (park_size, buy_size, park) => {
  let start_point = [];
  let min = Infinity;
  let count = 0;

  // 쓰레기를 찾을 공간의 시작점 찾기
  for (let i = 0; i <= park_size - buy_size; i++) {
    for (let j = 0; j <= park_size - buy_size; j++) {
      start_point.push([i, j]);
    }
  }

  // 각 시작점을 순회하여 쓰레기가 적은 공간 찾기
  for (let start of start_point) {
    for (let i = start[0]; i < start[0] + buy_size; i++) {
      for (let j = start[1]; j < start[1] + buy_size; j++) {
        if (park[i][j] == 1) count++;
      }
    }

    if (count < min) min = count;
    count = 0;
  }

  return min;
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  // 테스트케이스 관련 변수
  let T = 0;
  let countT = 0;

  // 각 케이스에서 사용될 변수
  let countN = 0;
  let park = [];
  let park_size = 0;
  let buy_size = 0;

  for await (const line of rl) {
    if (!T) {
      //테스트케이스 개수
      T = +line;
    } else if (!park_size && !buy_size) {
      let temp = line.split(" ").map(Number);
      park_size = temp[0];
      buy_size = temp[1];
    } else {
      park.push(line.split(" ").map(Number));
      countN += 1; // park 줄을 입력받으면 countN을 증가시켜주고
    }

    if (countN != 0 && countN == park_size) {
      // N만큼 park 배열을 잘 입력 받았으면
      const res = trash(park_size, buy_size, park); // trash개수를 찾는 함수를 호출
      console.log(res);

      // 테스트케이스 하나가 끝나면
      park_size = 0; // T, countT를 제외한 값들을 초기화해준다.
      buy_size = 0;
      countN = 0;
      park = [];
      countT += 1; // 그리고 테스트 케이스 하나를 통과했으니 countT를 1 올려준다.
    }

    if (countT === T) {
      // 입력받은 T 만큼 테스트 케이스를 통과하게되면
      rl.close(); // rl.close()를 호출하고
    }
  }

  process.exit();
})();
