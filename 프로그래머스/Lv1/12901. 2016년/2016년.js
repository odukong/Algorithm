function solution(a, b) {
  var num = 0;
  var index = 1;
  var day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  while (index < a) {
    if (index % 2 != 0 && index <= 7) num += 31;
    else if (index % 2 == 0 && index > 7) num += 31;
    else if (index == 2) num += 29;
    else num += 30;
    index++;
  }
  num += b;
  return day[num % 7];
}

// getDay()를 이용한 풀이
function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`2016-${a}-${b}`).getDay();
  return day[date];
}
