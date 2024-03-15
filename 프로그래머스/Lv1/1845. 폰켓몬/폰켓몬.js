function solution(nums) {
  var arr = Array.from(new Set(nums));
  return arr.length >= nums.length / 2 ? nums.length / 2 : arr.length;
}

// ** set객체의 set.size 이용가능
