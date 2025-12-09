function solution(orders, course) {
  // 조합 함수
  function getCombination(source, selectNumber) {
    const result = [];

    if (selectNumber == 1) return source.map((num) => num);

    [...source].forEach((fixed, idx, origin) => {
      const rest = origin.slice(idx + 1); // fixed를 제외한 나머지 영역
      // rest영역에서 가능한 조합(뽑으려는 조합 개수-1)을 찾음
      const combination = getCombination(rest, selectNumber - 1);
      // fixed에 구한 조합(combitaion)을 덧붙임
      const attached = combination.map((comb) => fixed + comb);
      result.push(...attached);
    });

    return result;
  }

  const possible = [];
  // 각 손님마다 나올 수 있는 조합을 모두 저장한다.
  for (const order of orders) {
    // course(개수)마다 단품 메뉴 조합을 모두 뽑아낸다.
    course.forEach((selectNumber) => {
      const result = getCombination(order, selectNumber);
      possible.push(...result);
    });
  }

  const cases = new Map();
  // 가능한 코스요리 조합을 주문한 횟수를 계산한다
  for (const comb of possible) {
    const sortedComb = [...comb].sort().join("");
    if (!cases.has(sortedComb)) {
      cases.set(sortedComb, 1);
    } else {
      cases.set(sortedComb, cases.get(sortedComb) + 1);
    }
  }

  const result = [];
  // course마다 가장 많이 나온 코스요리 조합을 도출한다
  for (const size of course) {
    let maxCount = 0;
    for (const [key, value] of cases) {
      if (key.length == size && maxCount < value) {
        maxCount = value;
      }
    }
    for (const [key, value] of cases) {
      if (value == 1) continue;
      if (key.length == size && maxCount == value) {
        result.push(key);
      }
    }
  }

  return result.sort();
}
