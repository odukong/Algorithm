function solution(arr, divisor) {
  var result = arr.filter((a) => a % divisor === 0);
  return result.length === 0
    ? (result.push(-1), result)
    : result.sort((a, b) => a - b);
}
