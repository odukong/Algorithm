// Solution
function solution(ingredient) {
  var result = 0;
  var stack = [];
  ingredient.forEach((m) => {
    stack.push(m);
    if (stack.length >= 4) {
      let str = stack.slice(-4).join("");
      if (str == "1231") {
        result += 1;
        for (let i = 0; i < 4; i++) stack.pop();
      }
    }
  });
  return result;
}

// 초기 오답 풀이 - 반례 )  [1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]
function solution(ingredient) {
  var result = 0;
  var isEnd = 0;
  var str = ingredient.join("");
  while (!isEnd) {
    if (str.split("1231")[0].length == str.length) isEnd = 1;
    else if (str.split("1231").join("") == "") {
      result += str.length / 4;
      isEnd = 1;
    } else {
      result += str.split("1231").length - 1;
      str = str.split("1231").join("");
    }
  }
  return result;
}
