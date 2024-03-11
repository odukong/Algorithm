function solution(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = 1; j < number.length - i; j++) {
      for (let k = 1; k < number.length - i - j; k++) {
        number[i] + number[i + j] + number[i + j + k] === 0 && count++;
      }
    }
  }
  return count;
}

// 유사한 풀이 = 보기 더 편하다고 생각
function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        const sum = number[i] + number[j] + number[k];
        if (sum === 0) answer++;
      }
    }
  }
  return answer;
}
