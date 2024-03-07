function solution(x) {
  var arr = [];
  let n = x;
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return x % arr.reduce((acc, cur) => acc + cur) === 0;
}
