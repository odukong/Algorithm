function solution(k, score) {
  var arr = [];
  for (let i = 0; i < score.length; i++) {
    let hall = score.slice(0, i + 1).sort((a, b) => b - a);
    hall.length < k ? arr.push(hall.at(-1)) : arr.push(hall[k - 1]);
  }
  return arr;
}

// stack을 이용한 풀이 : k를 넘어간 값은 shift하여 stack 배열에 넘김
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}
