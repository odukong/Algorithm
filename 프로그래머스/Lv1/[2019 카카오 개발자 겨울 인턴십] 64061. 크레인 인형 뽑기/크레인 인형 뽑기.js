function solution(board, moves) {
  var result = 0;
  var stack = [];
  var copy = new Array(board.length);

  // 1. board를 변형한 이차원 배열 생성(copy)
  for (var i = 0; i < copy.length; i++) {
    copy[i] = new Array(board.length);
  }

  // 1-1. ex. copy[0][1]에는 첫 번째 격자 열의 두 번째 존재하는 인형의 값이 위치하도록 함
  board.forEach((arr, idx) => {
    arr.forEach((element, i) => (copy[i][board.length - idx - 1] = element));
  });

  // 1-2. 0인 값들은 인형이 존재하지 않기 때문에 이를 제외한 copy 배열을 생성
  for (let i = 1; i <= board.length; i++) {
    copy[i - 1] = copy[i - 1].filter((v) => v != 0);
  }

  // 2. 인형 뽑기 진행
  moves.forEach((move) => {
    if (copy[move - 1].length != 0) {
      if (copy[move - 1].at(-1) == stack.at(-1)) {
        copy[move - 1].pop();
        stack.pop();
        result += 2;
      } else {
        stack.push(copy[move - 1].at(-1));
        copy[move - 1].pop();
      }
    }
  });
  return result;
}
