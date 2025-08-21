function solution(queue1, queue2) {
  const queue = queue1.concat(queue2);
  const SIZE = queue.length;
  const limit = queue.length * 2;

  let pointer = [0, SIZE / 2]; // 큐 포인터 (queue1, queue2)
  let sum = [0, 0]; // 큐 각 합산 값
  let standard = 0; // 목표 합산 값

  // 1. 목표 큐의 합
  for (let i = 0; i < queue1.length; i++) {
    sum[0] += queue1[i];
    sum[1] += queue2[i];
    standard += queue1[i] + queue2[i];
  }
  if (standard % 2 !== 0) {
    return -1;
  } else {
    standard = standard / 2;
  }

  let count = 0;
  // 2. 작업 횟수 구하기
  while (count <= limit) {
    if (sum[0] == standard) {
      return count;
    } else if (sum[0] > sum[1]) {
      sum[0] -= queue[pointer[0]];
      sum[1] += queue[pointer[0]];
      pointer[0] = (pointer[0] + 1) % SIZE;
    } else {
      sum[1] -= queue[pointer[1]];
      sum[0] += queue[pointer[1]];
      pointer[1] = (pointer[1] + 1) % SIZE;
    }
    count++;
  }
  return -1;
}
