function solution(n, total = 0) {
  return n == 0
    ? total
    : n % 2 == 0
    ? solution(n / 2, total)
    : solution(n - 1, total + 1);
}
