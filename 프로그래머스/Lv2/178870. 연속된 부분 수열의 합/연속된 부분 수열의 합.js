function solution(sequence, k) {
  const MAX = sequence.length;
  let start = 0;
  let minSize = Infinity; // 부분 수열의 합을 이루는 인덱스범위 크기
  let answer = [0, 0]; // [start,end]
  let sum = 0; // 부분 수열의 합

  for (let end = 0; end < MAX; end++) {
    sum += sequence[end]; // k(합)보다 크거나 같아질 때까지 합 연산.

    // 현재 합이 k이상이라면, k보다 작아질 때까지 start++ 연산으로 합 감소
    while (sum >= k) {
      const size = end - start;
      // 현재 합과 k가 일치하고 인덱스 범위의 크기가 최소 크기보다 작으면, answer업데이트
      if (sum === k && size < minSize) {
        answer = [start, end];
        minSize = size;
      }
      sum -= sequence[start++];
    }
  }

  return answer;
}
