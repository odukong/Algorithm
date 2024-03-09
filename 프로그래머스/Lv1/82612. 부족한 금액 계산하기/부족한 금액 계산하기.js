function solution(price, money, count) {
  var result = (count * (price * (1 + count))) / 2 - money;
  return result < 0 ? 0 : result;
}
