function solution(s) {
  var answer = [];
  var arr = [...s];
  for (let i = 0; i < s.length; i++) {
    if (arr.filter((v) => v == arr[i]).length === 1) answer.push(-1);
    else {
      if (arr.slice(0, i + 1).indexOf(arr[i]) == i) answer.push(-1);
      else answer.push(i - arr.slice(0, i).lastIndexOf(arr[i]));
    }
  }
  return answer;
}

// 효율적인 풀이 : count가 존재하지 않을 경우 -1, 존재한다면 i-count 반환
// map은 새로운 배열을 만들어냄
const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
