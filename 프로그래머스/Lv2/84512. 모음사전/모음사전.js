function solution(word) {
  var answer = 0;
  const findWord = word;
  const alphabets = ["A", "E", "I", "O", "U"];

  // A, AA, AAA, AAAA, AAAAA, AAAAE, AAAAI 순서...
  function dfs(alpha) {
    answer++;
    if (alpha == findWord) return true;
    if (alpha.length == 5) return false;

    for (let v of alphabets) {
      if (dfs(alpha + v)) return true;
    }
  }

  // A ~ U 를 시작으로 한 깊이 탐색 시작
  for (let alpha of alphabets) {
    if (dfs(alpha) == true) {
      return answer;
    }
  }
}
