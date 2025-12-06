function solution(players, m, k) {
  let answer = 0;
  const available_server = Array.from({ length: 24 }).reduce(
    (acc, _, i) => ({ ...acc, [i]: 0 }),
    {}
  );

  for (let time = 0; time < 24; time++) {
    // 1. 현 시각 필요한 서버의 수를 확인합니다.
    const need_server = Math.floor(players[time] / m); // 필요한 서버의 수
    // 2. 존재하는 서버 수로 감당가능한지 확인합니다.
    if (available_server[time] < need_server) {
      // 2-1. 감당 불가하다면, 서버를 증설합니다.
      const add_server = need_server - available_server[time];
      answer += add_server;
      for (let i = time; i < time + k; i++) {
        available_server[i] += add_server;
      }
    }
  }

  return answer;
}
