function solution(numbers) {
  var answer = numbers
    .map(String)
    .sort((a, b) => {
      // (+)연산의 더 큰 값을 내림차순 정렬
      return b + a - (a + b);
    })
    .join("");

  return answer[0] == 0 ? "0" : answer;
}
