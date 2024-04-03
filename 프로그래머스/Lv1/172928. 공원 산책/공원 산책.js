function solution(park, routes) {
  const ROW_MAX = park.length;
  const COLUMN_MAX = park[0].length;
  const ROUTE = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
  var result = [0, 0];

  // S (시작점) 좌표 구하기
  for (let i = 0; i < park.length; i++) {
    let index = park[i].indexOf("S");
    if (index != -1) {
      result[0] = i;
      result[1] = index;
      break;
    }
  }

  // routes 경로를 따라 로봇강아지 이동
  routes.forEach((route) => {
    let arr = route.split(" ");
    let moves = ROUTE[arr[0]];

    // 실제 이동 전, 시험 이동
    let xy = moves.map((move, idx) => {
      if (move != 0) {
        let path = [...result];
        // moves 방향 한 칸씩 이동하며 장애물 확인
        for (let i = 0; i < arr[1]; i++) {
          path[idx] += move;
          // 경계를 벗어나면 최대값으로 설정
          if (
            path[0] < 0 ||
            path[0] >= ROW_MAX ||
            path[1] < 0 ||
            path[1] >= COLUMN_MAX
          ) {
            return idx == 0 ? ROW_MAX : COLUMN_MAX;
          }
          // 장애물인 경우 최대값으로 설정
          if (
            park[path[0]][path[1]] === undefined ||
            park[path[0]][path[1]] === "X"
          ) {
            return idx == 0 ? ROW_MAX : COLUMN_MAX;
          }
        }
        return path[idx];
      }
      return result[idx];
    });

    if (xy[0] < ROW_MAX && xy[1] < COLUMN_MAX) {
      result[0] = xy[0];
      result[1] = xy[1];
    }
  });

  return result;
}
