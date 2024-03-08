function solution(num) {
  var count = 0;
  var n = num;
  while (n !== 1 && count < 500) {
    n = n % 2 ? n * 3 + 1 : n / 2;
    count++;
  }
  return count < 500 ? count : -1;
}
