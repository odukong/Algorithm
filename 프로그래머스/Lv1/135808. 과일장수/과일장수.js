function solution(k, m, score) {
  var result = 0;
  const length =
    score.length % m == 0 ? score.length / m : Math.floor(score.length / m);
  score.sort((a, b) => b - a);
  for (let i = 0; i < length; i++) {
    result += score.slice(i * m, (i + 1) * m).at(-1) * m;
  }
  return result;
}
