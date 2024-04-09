function solution(s) {
  var answer = [0, 0];
  while (s !== "1") {
    // 1. 0 제거
    const before = s.length;
    const remove = s.replace(/0/gi, "").length;
    answer[1] += before - remove;
    s = remove;

    // 2. 2진법 변환
    s = s.toString(2);
    answer[0]++;
  }
  return answer;
}
