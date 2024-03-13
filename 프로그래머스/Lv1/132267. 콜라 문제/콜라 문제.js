function solution(a, b, n) {
  var count = 0;
  while (n >= a) {
    let max = Math.floor(n / a);
    count += max * b;
    n -= max * (a - b);
  }
  return count;
}
