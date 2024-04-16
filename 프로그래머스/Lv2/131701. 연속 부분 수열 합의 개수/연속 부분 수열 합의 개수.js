// My solution
function solution(elements) {
  var arr = new Set();
  const boundary = elements.length;

  // 길이마다.
  for (let i = 1; i <= boundary; i++) {
    let head = 0;
    let tail = i;
    while (true) {
      let sum = 0;
      for (let j = head; j < tail; j++) {
        sum += elements[j % boundary];
      }
      arr.add(sum);
      head++;
      tail++;
      if (head == boundary) break;
    }
  }

  return arr.size;
}

// 참고하면 좋을 풀이
function solution(elements) {
  const circular = elements.concat(elements); // elements를 이어 붙어 범위를 넘어가지 않도록 방지.
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}
