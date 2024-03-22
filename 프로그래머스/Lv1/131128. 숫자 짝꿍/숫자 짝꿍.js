function solution(X, Y) {
  var numbers = [];
  var common = {};
  var result = "";

  // X, Y가 가지고 있는 숫자와 그 개수 구하기
  for (let i = 0; i < 2; i++) {
    let str = i == 0 ? X : Y;
    let obj = {};
    str.split("").forEach((s) => {
      if (!obj.hasOwnProperty(s)) obj[s] = 1;
      else obj[s] += 1;
    });
    numbers.push(obj);
  }

  // X, Y의 공통된 숫자와 그 공통 개수 구하기
  let key_0 = Object.keys(numbers[0]);
  let key_1 = Object.keys(numbers[1]);
  key_0.forEach((n) => {
    if (key_1.includes(n)) {
      common[n] = Math.min(numbers[0][n], numbers[1][n]);
    }
  });

  // 만들 수 있는 가장 큰 정수 반환 = result
  let key = Object.keys(common).reverse();
  if (key.length == 0) {
    result = "-1";
  } else if (key.length == 1 && key == "0") {
    result = "0";
  } else {
    result = key.reduce((acc, cur) => acc + cur.repeat(common[cur]), "");
  }
  return result;
}
