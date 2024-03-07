function solution(x, n) {
  var answer = [];
  let arr = new Array(n).fill(x);
  arr.forEach((num, index) => answer.push(num * (index + 1)));

  return answer;
}

// new Array는 속도가 느리기 때문에 아래와 같은 코드를 추천
function solution(x, n) {
  var answer = [];
  // new Array(n).fill(x)를 대체한 코드
  const N = n;
  let arr;
  (arr = []).length = N;
  arr.fill(x);

  arr.forEach((num, index) => answer.push(num * (index + 1)));

  return answer;
}
