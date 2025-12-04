function solution(maps) {
  const ROW = maps.length;
  const COLUMN = maps[0].length;

  // 특정 단어의 좌표를 찾습니다
  // 시작 위치(S)과 레버 위치(L)를 파악하기 위해 사용됩니다
  function findWord(word) {
    const find_index = maps.join("").indexOf(word);
    const find_x = Math.floor(find_index / COLUMN);
    const find_y = find_index % COLUMN;
    return [find_x, find_y];
  }

  // 출구를 찾기 위해 소요되는 최소 탐색 시간을 구한 BFS
  function bfs(x, y, time, destination) {
    const queue = []; // 탐색 큐
    const visited = Array.from(new Array(ROW), () =>
      new Array(COLUMN).fill(false)
    ); // 방문 여부
    queue.push([x, y, time]); // 탐색을 시작할 좌표와 탐색 시간(time)를 push
    visited[x][y] = true;

    // 상, 하, 좌, 우 이동을 위한 좌표 변화 상수
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // 탐색할 값이 없을 때까지 반복
    while (queue.length > 0) {
      let [cx, cy, time] = queue.shift(); // 탐색 좌표를 queue에서 꺼냅니다.
      if (maps[cx][cy] == destination) return time; // 탐색 좌표와 목적지와 동일하다면 소요 시간(time)을 반환

      // 현재 탐색 좌표를 기준으로 좌표를 [상,하,좌,우]로 변화시켜 새로운 탐색값을 도출합니다.
      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (nx < 0 || ny < 0 || nx >= ROW || ny >= COLUMN) continue; // 경계를 넘어가면 queue에 넣지 않습니다.
        if (maps[nx][ny] === "X") continue; // 벽(X)이라면 queue에 넣지 않습니다.
        if (visited[nx][ny]) continue; // 이미 방문한 좌표라면 queue에 넣지 않습니다.

        // 새로 탐색할 좌표를 추가하고, 방문여부를 나타냅니다.
        visited[nx][ny] = true;
        queue.push([nx, ny, time + 1]);
      }
    }
    // 목적지까지 갈 수 없다면 -1를 반환합니다
    return -1;
  }

  const goToL = bfs(...findWord("S"), 0, "L"); // 시작지점(S)에서 레버지점(L)까지 가는 최소 시간
  if (goToL == -1) return -1;
  return bfs(...findWord("L"), goToL, "E"); // 시작지점(S)+레버지점(L)에서 출구(E)까지 가는 최소 시간
}
