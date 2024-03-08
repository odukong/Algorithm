function solution(a, b) {
  return a === b ? a : ((Math.abs(a - b) + 1) * (a + b)) / 2;
}
