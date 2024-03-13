// my solution
function solution(n, arr1, arr2) {
  var arr = [];
  for (let i = 0; i < n; i++) {
    let str = "";
    let a = arr1[i].toString(2);
    let b = arr2[i].toString(2);

    a.length < n && (a = "0".repeat(n - a.length) + a);
    b.length < n && (b = "0".repeat(n - b.length) + b);
    for (let j = 0; j < n; j++) {
      +a[j] || +b[j] ? (str += "#") : (str += " ");
    }
    arr.push(str);
  }
  return arr;
}

// padStart 활용 풀이 ** padStart(n,값) : n자리를 만족하도록 문자열 앞에 '값'을 채워넣음.
var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );
