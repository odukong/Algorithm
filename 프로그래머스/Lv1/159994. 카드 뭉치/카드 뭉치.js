function solution(cards1, cards2, goal) {
  var value = "";
  var count = 0;
  var answer = "Yes";

  while (count < goal.length) {
    value = goal[count];
    switch (value) {
      case cards1.at():
        cards1.shift();
        break;
      case cards2.at():
        cards2.shift();
        break;
      default:
        answer = "No";
    }
    count++;
    if (answer == "No") break;
  }

  return answer;
}
