function solution(priorities, location) {
  var queue = priorities;
  var result = 0;
  while (true) {
    let max = Math.max(...queue);
    let temp = queue[0];
    if (max == queue[0]) {
      queue.shift();
      result++;
      if (location == 0) break;
    } else {
      queue.shift();
      queue.push(temp);
    }
    location = location == 0 ? queue.length - 1 : location - 1;
  }

  return result;
}
