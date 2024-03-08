function solution(arr) {
  var min = Math.min(...arr);
  return arr.length === 1 ? [-1] : arr.filter((element) => min !== element);
}

// 2. 더 효율적인 코드 : indexOf를 사용 - [0.56ms, 43.2MB]
function solution(arr) {
  return arr.length === 1
    ? [-1]
    : (arr.splice(arr.indexOf(Math.min(...arr)), 1), arr);
}
