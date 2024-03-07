function solution(n) {
  let index = 1;
  let answer = 0;
  while (index <= n / 2) {
    n % index === 0 && (answer += index);
    index++;
  }
  return answer + n;
}
