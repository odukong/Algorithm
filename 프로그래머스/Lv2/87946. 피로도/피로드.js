function solution(k, dungeons) {
  var answer = 0;
  var path = Array.from({ length: dungeons.length }).fill(false);
  dungeons.sort(([a], [b]) => b - a);

  const bfs = (k, dungeon, index) => {
    answer = Math.max(answer, index);
    // 경우의 수 탐색
    for (let i = 0; i < dungeon.length; i++) {
      if (!path[i] && dungeon[i][0] <= k) {
        path[i] = true;
        bfs(k - dungeon[i][1], dungeon, index + 1);
        path[i] = false;
      }
    }
  };

  bfs(k, dungeons, answer);
  return answer;
}
