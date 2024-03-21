function solution(n, lost, reserve) {
  // 학생 별 체육복 개수 count
  var arr = Array(n)
    .fill(1)
    .map((v, idx) => {
      if (lost.includes(idx + 1)) v -= 1;
      if (reserve.includes(idx + 1)) v += 1;
      return v;
    });

  // 체육복 없는 경우, 배분
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      if (i != 0 && arr[i - 1] == 2) {
        arr[i] += 1;
        arr[i - 1] -= 1;
      } else if (i != arr.length - 1 && arr[i + 1] == 2) {
        arr[i] += 1;
        arr[i + 1] -= 1;
      }
    }
  }
  return arr.filter((v) => v != 0).length; // 참여 가능 학생 수
}
