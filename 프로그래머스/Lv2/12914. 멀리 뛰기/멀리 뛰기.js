// dynamic programming : 피보나치
function solution(n) {
  const dp = [0, 1, 2];
  if (n < 3) return dp[n];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

// Fault Solution : overflow
function fact(n, acc = 1) {
  return n !== 1 ? fact(n - 1, n * acc) : acc;
}
function solution(n) {
  const k = 1234567889;
  var sum = 0;

  // 1의 개수 [0,2,4...], [1,3,5...]
  for (let i = n; i > -1; i -= 2) {
    sum +=
      ((fact(i + (n - i) / 2) % k) /
        (((fact(i || 1) % k) * fact((n - i) / 2 || 1)) % k)) %
      k;
  }
  return sum;
}
