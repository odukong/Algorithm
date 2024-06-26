// 풀이 참조
function solution(maps) {
  const yLength = maps.length;
  const xLength = maps[0].length;
  const goalY = yLength - 1;
  const goalX = xLength - 1;

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [y, x, steps] = queue.shift(); // 순차적으로 경로 검사

    if (x < 0 || x >= xLength) continue;
    if (y < 0 || y >= yLength) continue;
    if (maps[y][x] === 0) continue;

    if (y === goalY && x === goalX) {
      return steps;
    }

    maps[y][x] = 0; // 이미 지나간 경로는 0(벽)으로 처리
    queue.push([y + 1, x, steps + 1]);
    queue.push([y - 1, x, steps + 1]);
    queue.push([y, x + 1, steps + 1]);
    queue.push([y, x - 1, steps + 1]);
  }

  return -1;
}
