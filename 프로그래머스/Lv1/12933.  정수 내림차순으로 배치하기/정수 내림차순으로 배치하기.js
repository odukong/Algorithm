// my solution : 간단한 버전
function solution(n) {
  return Number([...n.toString()].sort().reverse().join(""));
}

// 숫자를 이용한 풀이
var nums = [];
do {
  nums.push(n % 10);
  n = Math.floor(n / 10);
} while (n > 0);

return nums.sort((a, b) => b - a).join("") * 1;
