function solution(n, m) {
  let arr = [];
  if (Number.isInteger(Math.max(n, m) / Math.min(n, m))) {
    arr.push(Math.min(n, m));
  } else {
    let min = 0;
    for (let i = 1; i < Math.min(n, m); i++) {
      if (n % i === 0 && m % i === 0) {
        min = i;
      }
    }
    arr.push(min);
  }

  arr.push((n * m) / arr[0]);

  return arr;
}

// 공부 필요 : 유클리드 호제법 사용한 풀이
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
