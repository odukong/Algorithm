function solution(N, stages) {
  var result = new Map();
  for (let i = 0; i < N; i++) {
    let arr = stages.filter((stage) => stage >= i + 1);
    let failing = arr.filter((v) => v == i + 1);
    result.set(i + 1, failing.length / arr.length);
  }

  return [...new Map([...result].sort((a, b) => b[1] - a[1])).keys()];
}
