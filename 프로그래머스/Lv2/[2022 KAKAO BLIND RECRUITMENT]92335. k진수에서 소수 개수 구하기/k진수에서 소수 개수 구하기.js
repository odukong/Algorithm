function solution(n, k) {
  var result = 0;
  // 1. n을 k진수로 변환한 후, 0 기준을 분할
  var arr = n.toString(k).split(0).map(Number);

  // 2. 소수인지 판단하는 함수(isPrime) 정의
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  };

  // 3. arr요소에 대해 소수 판단.
  for (let element of arr) {
    if (element === 0 || element == 1) continue;
    if (isPrime(element)) result++;
  }

  return result;
}
