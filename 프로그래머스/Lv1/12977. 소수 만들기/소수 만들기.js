function solution(nums) {
  let decimal = [];
  let range = nums.length;
  for (let i = 0; i < range - 2; i++) {
    for (let j = i + 1; j < range - 1; j++) {
      for (let k = j + 1; k < range; k++) {
        decimal.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  return decimal.filter((v) => {
    for (let i = 2; i * i <= v; i++) {
      if (v % i == 0) return false;
    }
    return true;
  }).length;
}
