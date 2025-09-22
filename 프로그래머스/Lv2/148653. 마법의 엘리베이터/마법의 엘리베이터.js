function solution(storey) {
  let result = 0;

  while (storey > 0) {
    const current = storey % 10;
    const next = Math.floor((storey % 100) / 10);

    if (current < 5) {
      result += current;
    } else if (current > 5) {
      result += 10 - current;
      storey += 10 - current;
    } else {
      // current가 5인 경우, 다음 값에 따라 올림,내림을 결정.
      if (next < 5) result += current;
      else {
        result += 10 - current;
        storey += 10 - current;
      }
    }

    storey = Math.floor(storey / 10); // 처리된 current값 제거.
  }

  return result;
}
