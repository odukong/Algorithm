// My Solution : arr의 Max 기준으로 탐색
function solution(arr) {
  const max = Math.max(...arr);
  var index = 1;
  while (true) {
    let num = arr.filter((v) => (max * index) % v != 0).length;
    if (num == 0) return max * index;
    index++;
  }
}

// Diff solution : 재귀함수 사용 풀이
function solution(arr) {
  return arr.reduce((acc, cur) => {
    const recursive = (min, max) => {
      return min % max === 0 ? max : recursive(max, min % max);
    };

    return (acc * cur) / recursive(acc, cur);
  });
}
