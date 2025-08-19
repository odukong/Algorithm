function solution(arr) {
  const answer = [0, 0]; // 최종 0과 1의 개수를 담을 배열

  function compress(row, col, size) {
    // 1. 해당 영역이 모두 같은 수인지 확인
    const standard = arr[row][col];
    let allSame = true;
    for (let i = row; i < row + size; i++) {
      for (let j = col; j < col + size; j++) {
        if (arr[i][j] !== standard) {
          allSame = false;
          break;
        }
      }
      if (!allSame) break;
    }

    // 2. 플래그 값에 따라 분기적으로 처리.
    if (allSame) {
      // 2-1. 영역 값이 모두 동일할 경우
      answer[standard]++;
    } else {
      // 2-2. 영역 값이 동일하지 않을 경우.
      const nextSize = size / 2;
      if (size / 2 < 1) return;
      compress(row, col, nextSize); // 1사분면 (좌측 상단)
      compress(row, col + nextSize, nextSize); // 2사분면 (우측 상단)
      compress(row + nextSize, col, nextSize); // 3사분면 (좌측 하단)
      compress(row + nextSize, col + nextSize, nextSize); // 4사분면 (우측 하단)
    }
  }

  compress(0, 0, arr.length);

  return answer;
}
