// My solution
function solution(n, m, section) {
  var count = 0;
  while (section.length > 0) {
    let index = 0;
    for (let i = 0; i < section.length; i++) {
      if (section[i] - section[0] < m) {
        index = i;
      } else {
        index = i - 1;
        break;
      }
    }

    count++;

    for (let i = 0; i <= index; i++) {
      section.shift();
    }
  }
  return count;
}

// extra. painted 변수(index)로 해당 section을 칠한 상태인지 판단
function solution(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
