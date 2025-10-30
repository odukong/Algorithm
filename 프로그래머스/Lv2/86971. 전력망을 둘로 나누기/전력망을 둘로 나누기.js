// 연결 노드 개수 세기
function countNodes(startNode, graph, n) {
  let count = 0;
  const stack = []; // dfs를 위한 stack (방문하는 송전탑)
  const visit = Array(n + 1).fill(false); // 노드 방문 여부

  stack.push(startNode);
  visit[startNode] = true;
  count++;

  while (stack.length !== 0) {
    const node = stack.pop();

    for (const neighbor of graph[node]) {
      if (!visit[neighbor]) {
        visit[neighbor] = true;
        stack.push(neighbor);
        count++;
      }
    }
  }

  return count;
}

function solution(n, wires) {
  let minDifference = Infinity;

  // 모든 전선을 한 번씩 끊어보는 루프
  for (let i = 0; i < wires.length; i++) {
    const graph = Array(n + 1)
      .fill()
      .map(() => []); // 각 송전탑과 연결된 송전탑 배열

    for (let j = 0; j < wires.length; j++) {
      if (i === j) continue; // i번째 전선은 끊어진 것으로 간주

      const [start, end] = wires[j];
      graph[start].push(end);
      graph[end].push(start);
    }

    const countNetwork = countNodes(1, graph, n);
    const otherNetwork = n - countNetwork;

    const difference = Math.abs(countNetwork - otherNetwork);
    minDifference = Math.min(minDifference, difference);
  }

  return minDifference;
}
