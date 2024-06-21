function solution(n, t, m, p) {
  var arr = [];
  let number = 0;

  while (true) {
    [...number.toString(n)].forEach((v) => arr.push(v.toUpperCase())); // n진수 변환

    // 1차 범위 체크 (:첫 번째 사람의 순서가 t번 돌아왔는가)
    if (t <= arr.length / m) {
      let temp = arr.slice(t * m).length;
      // 2차 범위 체크 (:t*m 범위 이후 요소 개수가 '튜브 번호'이상인가)
      if (temp >= p) break;
    }
    number++;
  }

  arr = arr.filter((_, i) => (i + 1) % m == p % m); // 튜브가 말해야하는 값만을 획득
  return arr.slice(0, t).join(""); // 말해야하는 값의 개수까지 출력
}
