function solution(n, a, b) {
  for (let i = 1; i <= Math.log2(n); i++) {
    // 두 번호가 같은 그룹에 속하는지 확인
    if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
      return i; // 만나는 라운드를 반환
    }
    // 다음 라운드의 번호를 계산
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
}
