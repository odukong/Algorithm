function solution(brown, yellow) {
  var result = [0, 0];
  var arr = [];

  // 1. yellow 구성 개수 구하기 (약수 구하기)
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i == 0) {
      if (yellow / i >= i) arr.push([yellow / i, i]);
    }
  }

  // 2. yellow 구성에 따라 brown 배치하기
  for (let i = 0; i < arr.length; i++) {
    let sum = brown;
    sum -= (arr[i][0] + 2) * 2;
    sum -= arr[i][1] * 2;
    if (sum == 0) {
      result[0] = arr[i][0] + 2;
      result[1] = arr[i][1] + 2;
      break;
    }
  }

  return result;
}
