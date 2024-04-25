function solution(progresses, speeds) {
  var answer = [];
  progresses.forEach((progress, idx, arr) => {
    arr[idx] = Math.ceil((100 - progress) / speeds[idx]);
  });

  var index = 0;
  while (progresses.length != 0) {
    index = 0;
    if (progresses[index] < progresses[index + 1]) {
      answer.push(1);
      progresses.shift();
    } else {
      while (progresses[0] >= progresses[index + 1]) {
        index++;
      }
      answer.push(index + 1);
      progresses = progresses.slice(index + 1);
    }
  }

  return answer;
}
