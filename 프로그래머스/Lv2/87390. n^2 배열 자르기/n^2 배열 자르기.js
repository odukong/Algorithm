// My solution
function makeNum(row, column, n) {
  var arr = Array.from({ length: n - column + 1 }, (_, i) =>
    Math.max(row, column++)
  );
  return arr;
}
function solution(n, left, right) {
  var answer = [];
  const start = Math.floor(left / n);
  const end = Math.floor(right / n);
  for (let i = start; i <= end; i++) {
    if (start == end)
      answer.push(makeNum(i + 1, (left % n) + 1, (right % n) + 1));
    else if (i == start) answer.push(makeNum(i + 1, (left % n) + 1, n));
    else if (i == end) answer.push(makeNum(i + 1, 1, (right % n) + 1));
    else answer.push(makeNum(i + 1, 1, n));
  }
  return answer.reduce((acc, cur) => [...acc, ...cur]);
}

// 더 간단한 풀이
function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}
