function solution(n) {
  var dp = [];

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    let value = dp[i - 1] + dp[i - 2];
    dp[i] = value > 1000000007 ? value % 1000000007 : value;
  }

  return dp[n];
}
