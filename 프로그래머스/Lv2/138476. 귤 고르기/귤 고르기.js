function solution(k, tangerine) {
  const obj = new Object();
  tangerine.forEach((tanger) => {
    obj[tanger] != undefined ? (obj[tanger] += 1) : (obj[tanger] = 1);
  });

  const sorted = Object.values(obj).sort((a, b) => b - a);

  var sum = 0;
  var result = 0;
  for (const num of sorted) {
    result++;
    sum += num;
    if (sum >= k) break;
  }
  return result;
}
