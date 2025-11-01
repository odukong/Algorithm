function formatHtoM(time) {
  const [start, end] = time.split(":");
  return start * 60 + Number(end);
}

function solution(book_time) {
  let answer = 1;
  const sorted = book_time.sort((a, b) => formatHtoM(a[0]) - formatHtoM(b[0])); // 입실 시간 기준 정렬
  const stack = [sorted[0]]; // 현재 사용 중인 방의 목록들

  for (let i = 1; i < book_time.length; i++) {
    const [start, end] = sorted[i]; // ["15:00","17:00"]
    // 사용가능한 방이 하나라도 있는 지 체크
    const isDuplicate = stack.every(
      ([st, ed]) => formatHtoM(ed) + 10 > formatHtoM(start)
    );
    if (isDuplicate) {
      answer++; // 사용가능한 방이 없으면 방 하나 더 추가.
      stack.push(sorted[i]);
    } else {
      // 방 시간 업데이트
      const index = stack.findIndex(
        ([st, ed]) => formatHtoM(ed) + 10 <= formatHtoM(start)
      );
      stack[index] = sorted[i];
    }
  }

  return answer;
}
