function solution(left, right) {
  var result = 0;
  for (let i = left; i <= right; i++) {
    Number.isInteger(Math.sqrt(i)) ? (result -= i) : (result += i);
  }
  return result;
}
