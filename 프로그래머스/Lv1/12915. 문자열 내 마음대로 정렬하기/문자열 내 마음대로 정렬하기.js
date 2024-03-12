// my solution
function solution(strings, n) {
  return strings.sort((a, b) =>
    a.charCodeAt(n) === b.charCodeAt(n)
      ? a > b
        ? 1
        : -1
      : a.charCodeAt(n) - b.charCodeAt(n)
  );
}

/*----------------------------------------------------------*/
// 더 간단한 풀이 : localeCompare 사용
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

// ⭐replace, sort, push만 사용 : strings[i][n]을 단어 앞에 붙인 후 정렬->이후, 제거.
function solution(strings, n) {
  var answer = [];
  for (var i = 0; i < strings.length; i++) {
    var chu = strings[i][n];
    strings[i] = chu + strings[i];
  }
  strings.sort();
  for (var j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], "");
    answer.push(strings[j]);
  }

  return answer;
}
