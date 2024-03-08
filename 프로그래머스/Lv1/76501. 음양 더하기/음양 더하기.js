function solution(absolutes, signs) {
  var arr = absolutes.map((num, i) => (signs[i] ? num : -num));
  return arr.reduce((acc, cur) => acc + cur);
}

// 간소화된 유사 풀이
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
