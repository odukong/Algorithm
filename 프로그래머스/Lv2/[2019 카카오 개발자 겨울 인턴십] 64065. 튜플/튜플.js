function solution(s) {
  var tuples = s.replace(/{|}/g, "").split(",").map(Number);
  var tuple = [...new Set(tuples)];
  var result = {};
  for (let i = 0; i < tuple.length; i++) {
    result[tuple[i]] = tuples.filter((v) => v == tuple[i]).length;
  }

  return Object.entries(result)
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => Number(key));
}

// 참고하면 좋을 풀이
function solution(s) {
  return JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
      if (n) {
        return arr.concat(v.filter((f) => !arr.includes(f)));
      }
      return v;
    }, []);
}
