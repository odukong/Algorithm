function cal_combination(arr) {
  return arr.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

function solution(clothes) {
  var cloth = {};
  var sum = 0;

  clothes.forEach(([_, type]) => (cloth[type] = ++cloth[type] || 1));

  return cal_combination(Object.values(cloth));
}
