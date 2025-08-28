function solution(number, k) {
  const stack = [];

  // number를 순회하면서 stack에 최대한 가장 큰 수가 앞에 위치하도록 함.
  [...number].forEach((current) => {
    if (stack.length == 0) {
      stack.push(current);
      return;
    }

    while (true) {
      const top = stack[stack.length - 1];
      // current가 stack의 마지막 값보다 크다면, k를 소모하여 stack에서 제거
      if (current > top && k > 0) {
        stack.pop();
        k--;
      } else {
        stack.push(current);
        break;
      }
    }
  });

  // k가 남아있는 경우(ex. 내림차순으로 정렬), 뒤에서부터 k개를 제거.
  if (k > 0) {
    stack.splice(stack.length - k, k);
  }

  return stack.join("");
}
