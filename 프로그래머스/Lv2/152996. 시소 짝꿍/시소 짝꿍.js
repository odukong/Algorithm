function solution(weights) {
  let result = 0;
  const people = new Map();

  // 각 몸무게 인원 수
  weights.forEach((w) => {
    if (!people.get(w)) {
      people.set(w, 1);
    } else if (people.get(w) > 0) {
      people.set(w, people.get(w) + 1);
    }
  });

  const unique = new Set(weights);
  // 몸무게 비율 (1:1, 2:3, 1:2, 3:4) 짝꿍 찾기
  unique.forEach((w) => {
    const ratios = [w, w * (1 / 2), w * (2 / 3), w * (3 / 4)];

    for (let i = 0; i < ratios.length; i++) {
      // 시소 짝꿍 후보의 몸무게가 (1) 정수가 아니거나,
      // (2) weights에 존재하지 않으면, 다음 몸무게 비교
      if (ratios[i] % 1 !== 0 || people.get(ratios[i]) == undefined) continue;
      else {
        const pair = people.get(ratios[i]);
        result +=
          w === ratios[i] ? (pair * (pair - 1)) / 2 : people.get(w) * pair;
      }
    }
  });

  return result;
}
