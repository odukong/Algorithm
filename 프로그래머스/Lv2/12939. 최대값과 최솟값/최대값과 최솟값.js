function solution(s) {
  var arr = s
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);
  return [arr[0], arr.at(-1)].join(" ");
}
