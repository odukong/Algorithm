function solution(numbers) {
  return numbers.map((number) => {
    // 1. 짝수인 경우
    // +1인 숫자는 2진수 값도 마지막 자리가 1만 증가한 것을 의미. -> 다음 숫자 반환.
    if (number % 2 === 0) {
      return number + 1;
    }

    // 2. 홀수인 경우
    let bit = "0" + number.toString(2);
    let lastZero = bit.lastIndexOf("0"); // 2.1. 가장 마지막 '0'의 위치를 찾음

    let bits = bit.split("");
    bits[lastZero] = "1"; // 2.2. (숫자를 키우기 위한 최소한의 변화) 마지막 '0'을 '1'로 변경
    bits[lastZero + 1] = "0"; // 2.3. (증가폭을 줄이기 위해) 그 다음 자리의 '1'을 '0'로 변경

    return parseInt(bits.join(""), 2);
  });
}
