function solution(s) {
  var result = true;
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length == 0 && s[i] == ")") {
      result = false;
      break;
    }
    if (stack.at(-1) == "(" && s[i] == ")") {
      stack.pop();
      continue;
    }
    if (s[i] == "(") {
      stack.push(s[i]);
      continue;
    }
  }

  if (stack.length != 0) result = false;

  return result;
}
