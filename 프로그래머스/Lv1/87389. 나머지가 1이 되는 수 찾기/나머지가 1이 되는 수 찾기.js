function solution(n) {
  let x = n - 1;
  let index = 2;

  while (index <= x / 2) {
    if (x % index === 0) return index;
    index += 1;
  }
  return x;
}

// 다른 풀이 : i를 증가시켜 n%i(나머지)가 1이 되는 수를 찾음
const solution = function (n) {
  for (let i = 0; i < n; i++) {
    if (n % i == 1) {
      return i;
    }
  }
};
