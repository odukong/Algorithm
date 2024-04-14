function solution(people, limit) {
  var result = 0;
  var heavy = 0;
  var light = people.length - 1;

  people.sort((a, b) => b - a); // 내림차순 정렬
  while (true) {
    if (people[heavy] + people[light] <= limit) {
      heavy += 1;
      light -= 1;
    } else heavy += 1;
    result++;

    if (heavy == light) {
      result++;
      break;
    } else if (heavy > light) break;
  }
  return result;
}
