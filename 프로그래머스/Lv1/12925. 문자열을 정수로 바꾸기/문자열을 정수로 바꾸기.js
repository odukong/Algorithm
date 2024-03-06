function solution(s) {
  let first = s.charAt(0);
  return first === "-"
    ? -s.slice(1)
    : first === "+"
    ? +s.slice(1)
    : parseFloat(s);
}

// 간단한 답안 : 사칙연산이 수행되면서 자동으로 parsing
function strToInt(str) {
  return str / 1;
}
