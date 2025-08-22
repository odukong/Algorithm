function solution(numbers) {
  const number = numbers.split("");
  const cases = new Set(); // 만들 수 있는 모든 숫자 (중복X)
  const visited = new Array(number.length).fill(false); // 방문 여부
  var answer = 0; // 만들 수 있는 소수 개수

  // 소수 판별
  function isPrime(number) {
    if (number == 0 || number == 1) return false;
    if (number == 2) return true;
    for (let i = 2; i * i <= number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  }

  // 만들 수 있는 숫자
  function dfs(current) {
    for (let i = 0; i < number.length; i++) {
      if (!visited[i]) {
        visited[i] = true;

        const newCurrent = current + number[i];
        cases.add(Number(newCurrent)); // 소수 후보 추가

        dfs(newCurrent);

        visited[i] = false; // 백트래킹
      }
    }
  }

  dfs("");

  cases.forEach((value, key) => {
    if (isPrime(value)) answer++;
  });

  return answer;
}
