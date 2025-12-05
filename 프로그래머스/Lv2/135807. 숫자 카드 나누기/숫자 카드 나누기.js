function solution(arrayA, arrayB) {
  const MIN_A = arrayA[0]; // 가장 작은 A 요소
  const MIN_B = arrayB[0]; // 가장 작은 B 요소

  // A, B 배열의 각 요소를 모두 나눌 수 있는 약수를 구합니다.
  function getDivisors(num, standard) {
    let array = [];
    let divider = 1;
    // 주어진 숫자(num)의 모든 약수를 구합니다.
    while (divider <= Math.sqrt(num)) {
      if (num % divider === 0) {
        // A, B 각 배열의 요소들이 모두 나눠지는지 확인합니다.
        if (standard.every((el) => el % divider === 0)) {
          array.push(divider);
        }
        let pair = num / divider; // num 약수(divider)의 짝이 되는 약수도 체크
        if (pair !== divider) {
          if (standard.every((el) => el % pair === 0)) {
            array.push(pair);
          }
        }
      }
      divider++;
    }
    array.sort((a, b) => b - a); // 가장 큰 약수부터 정렬합니다.
    return array;
  }

  // 각 배열의 약수(divisors)가 상대 배열 요소(array)를 나누는지 확인합니다.
  function isDivide(divisors, array) {
    for (let num of divisors) {
      let result = array.some((el) => el % num == 0); // 하나라도 나누어진다면 해당 약수는 결과값 후보가 될 수 없습니다.
      if (!result) return num;
    }
    return 0;
  }

  // 1. A의 공약수를 모두 구합니다. (MIN_A의 약수)
  const A_divisors = getDivisors(MIN_A, arrayA);
  // 2. B의 공약수를 모두 구합니다. (MIN_B의 약수)
  const B_divisors = getDivisors(MIN_B, arrayB);
  // 3. A->B 공약수가 나눠지는지 확인합니다. (내림차순으로 확인)
  const A_MAX = isDivide(A_divisors, arrayB);
  // 4. B->A 공약수가 나눠지는지 확인합니다. (내림차순으로 확인)
  const B_MAX = isDivide(B_divisors, arrayA);

  // 5. 최종적으로 두 값을 비교하여 최대값을 반환합니다.
  return Math.max(A_MAX, B_MAX);
}
