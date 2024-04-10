function solution(n) {
  var count = [...n.toString(2)].filter((v) => v == 1).length;
  var i = n;
  while (i++) {
    let big = [...i.toString(2)].filter((v) => v == 1).length;
    if (count == big) {
      return i;
    }
  }
}
