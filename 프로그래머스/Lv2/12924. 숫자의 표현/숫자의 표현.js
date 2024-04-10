function solution(n) {
  var answer = 1; // n 자기 자신만으로도 방법이 될 수 있기에 미리 더함
  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    let count = i;
    while (sum < n) {
      sum += count;
      count++;
    }
    if (sum == n) answer++;
  }
  return answer;
}
