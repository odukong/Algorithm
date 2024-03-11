function solution(s, n) {
  return [...s]
    .map((s, _) => {
      const code = s.charCodeAt(0);
      if (s !== " ") {
        if (code <= 90 && code >= 65)
          return String.fromCharCode(((code + n - 65) % 26) + 65);
        else if (code <= 122 && code >= 97)
          return String.fromCharCode(((code + n - 97) % 26) + 97);
      } else {
        return " ";
      }
    })
    .join("");
}

// 아스키코드를 활용하지 않은 풀이[인덱스]
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
