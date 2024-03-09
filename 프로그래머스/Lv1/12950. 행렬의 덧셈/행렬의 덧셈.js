function solution(arr1, arr2) {
  var arr = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    arr.push(temp);
  }
  return arr;
}

// map 함수 활용 버전 : 2번 사용
// return arr1.map((a,i)=>a.map((b,j)=>b[j]+arr2[i][j]))
