// 1번 풀이
function solution(n) {
  var count = 0;
  for (let i = 2; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      i % j == 0 && (flag = 1);
    }
    !flag && count++;
  }
  return count;
}

// 2번 풀이 : 에라토스테네스의 체
function solution(n) {
  var arr = Array(n + 1)
    .fill(0)
    .map((_, i) => i);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i] == 0) continue;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  return arr.filter((v, i) => i != 1 && v != 0).length;
}
