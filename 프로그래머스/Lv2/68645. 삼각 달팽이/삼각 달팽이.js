function solution(n) {
  const total_blocks = (n * (1 + n)) / 2; // 총 블록의 개수
  const result = new Array(n).fill(0).map((_, i) => new Array(i + 1));

  let [row, column, count] = [0, 0, 1];

  // 1~마지막 요소까지의 값을 차례로 채움.
  while (count <= total_blocks) {
    // 1. 좌측하단 방향(세로) 값 채우기.
    while (row < n && !result[row][column]) {
      result[row++][column] = count++;
    }
    row--;
    column++;

    // 2. 우측방향 (가로) 값 채우기.
    while (column < n && !result[row][column]) {
      result[row][column++] = count++;
    }
    row--;
    column -= 2;

    // 3. 상단 방향 (세로) 값 채우기.
    while (row > 0 && !result[row][column]) {
      result[row--][column--] = count++;
    }
    row += 2;
    column++;
  }

  return result.flat();
}
