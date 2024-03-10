function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .filter((money) => {
      if (budget - money >= 0) {
        budget -= money;
        return true;
      }
      return false;
    }).length;
}

// 새롭게 안 개념을 적용한 답안 : while문 안에 reduce 함수 적용
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
