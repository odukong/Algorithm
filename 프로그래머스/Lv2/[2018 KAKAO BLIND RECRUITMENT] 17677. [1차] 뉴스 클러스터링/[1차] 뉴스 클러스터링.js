// 분할된 문자열 {2} 개수 계산
function cal_str(str) {
  var obj = {};
  var count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    let a = str.substr(i, 2).toUpperCase();
    if (/^[A-Z]{2}/g.test(a)) {
      obj[a] = obj[a] + 1 || 1;
      count++;
    }
  }
  return [obj, count];
}

function solution(str1, str2) {
  var [obj1, total1] = cal_str(str1);
  var [obj2, total2] = cal_str(str2);
  var inter = 0;

  // obj1, obj2 교집합 개수 (합집합 개수 = 갹 obj 개수(total) - 교집합 개수)
  Object.keys(obj1).forEach((key) => {
    if (Number.isInteger(obj2[key])) {
      inter += Math.min(obj1[key], obj2[key]);
    }
  });

  //
  return total1 + total2 - inter !== 0
    ? Math.floor((inter / (total1 + total2 - inter)) * 65536)
    : 65536;
}
