function solution(n) {
  let arr = [];

  if (n < 3) {
    arr.push(n % 3);
  }

  while (Math.floor(n / 3) >= 1) {
    arr.unshift(n % 3);
    if (Math.floor(n / 3) < 3) {
      arr.unshift(Math.floor(n / 3));
    }
    n = Math.floor(n / 3);
  }

  return arr.reduce((acc, cur, i) => (acc += cur * 3 ** i), 0);
}

// 효율성 코드 : toString,parseInt의 진법 변환 이용
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
