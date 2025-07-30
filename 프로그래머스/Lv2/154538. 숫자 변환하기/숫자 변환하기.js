function solution(x, y, n) {
  const queue = [[y, 0]]; // BFS 탐색 큐 [현재 값, 연산횟수]
  const visited = new Set();

  while (queue.length > 0) {
    let [current, count] = queue.shift();
    if (current === x) return count;
    if (visited.has(current) || current < x) continue;

    visited.add(current);

    if (current - n >= x) queue.push([current - n, count + 1]);
    if (current / 2 >= x && Number.isInteger(current / 2))
      queue.push([current / 2, count + 1]);
    if (current / 3 >= x && Number.isInteger(current / 3))
      queue.push([current / 3, count + 1]);
  }

  return -1;
}
