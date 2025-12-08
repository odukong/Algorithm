function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  road.forEach(([from, to, weight]) => {
    graph[from].push({ to: to, weight: weight });
    graph[to].push({ to: from, weight: weight });
  }); // 인접리스트 생성

  // 다익스트라 알고리즘 (1번 마을에서 각 마을까지 걸리는 최소 시간 업데이트)
  function dijkstra(start) {
    const dist = Array.from({ length: N + 1 }, () => Infinity);
    const heap = [[0, start]]; // 우선순위 큐
    dist[start] = 0;

    while (heap.length > 0) {
      const [c_time, c_village] = heap.sort((a, b) => a[0] - b[0]).shift(); // [현재 시간, 현재 마을]
      // 최소 시간(dist)이 현재 마을까지 걸린 시간보다 작다면, 다음 경로 탐색
      if (dist[c_village] < c_time) continue;

      // 현재 마을과 이어진 이웃 마을을 탐색
      const villages = graph[c_village];
      for (const next of villages) {
        const time = c_time + next.weight; // 이웃 마을까지 걸리는 시간
        if (time < dist[next.to]) {
          dist[next.to] = time;
          heap.push([time, next.to]);
        }
      }
    }

    return dist;
  }

  const costs = dijkstra(1);
  return costs.filter((cost) => cost <= K).length;
}
