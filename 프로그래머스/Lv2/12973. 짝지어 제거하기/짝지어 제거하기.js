function solution(n) {
  var current = [0, 1];
  for (let i = 2; i <= n; i++) {
    let [a, b] = current;
    current[0] = b % 1234567;
    current[1] = (a + b) % 1234567;
  }
  return current[1];
}
