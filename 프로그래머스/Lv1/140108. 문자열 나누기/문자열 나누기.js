function solution(s) {
  var count = 0;
  var index = 0;
  while (s.length > index) {
    let x = s[index];
    let diff = [1, 0];
    let isEnd = 0;
    while (!isEnd) {
      index++;
      x == s[index] ? (diff[0] += 1) : (diff[1] += 1);
      diff[0] == diff[1] && (isEnd = 1);
    }
    count++;
    index++;
  }
  return count;
}
