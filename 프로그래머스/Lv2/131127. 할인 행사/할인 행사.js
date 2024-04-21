function solution(want, number, discount) {
  var result = 0;
  // 10일마다 할인하는 품목 계산
  var menus = {};
  discount.slice(0, 10).forEach((v) => (menus[v] = ++menus[v] || 1));

  var start = 0;
  var boundary = 9;
  while (boundary < discount.length) {
    let flag = true;
    for (let i = 0; i < want.length; i++) {
      if ((menus[want[i]] || 0) < number[i]) {
        flag = false;
        break;
      }
    }
    if (flag) result++;
    boundary++;
    menus[discount[start++]] -= 1;
    menus[discount[boundary]] = ++menus[discount[boundary]] || 1;
  }
  return result;
}
