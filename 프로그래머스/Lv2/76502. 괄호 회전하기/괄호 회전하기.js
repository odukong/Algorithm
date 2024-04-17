function solution(s) {
  const SIZE = s.length;
  const RIGHT = { ")": "(", "}": "{", "]": "[" };
  var str = s.concat(s);
  var result = 0;
  for (let i = 0; i < SIZE; i++) {
    let rotateStr = str.slice(i, SIZE + i);
    let stack = [];
    for (let s of rotateStr) {
      if ((stack.at(-1) || 0) == RIGHT[s]) stack.pop();
      else stack.push(s);
    }
    if (stack.length == 0) result++;
  }
  return result;
}
