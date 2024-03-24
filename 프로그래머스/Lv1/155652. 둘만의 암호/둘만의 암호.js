function solution(s, skip, index) {
  var xCount = [...skip].map((s) => s.charCodeAt());
  var change = [...s].map((s) => s.charCodeAt());
  return change.reduce((acc, cur) => {
    let isEnd = 0;
    let c = 0;
    do {
      c++;
      if (!xCount.includes(((cur + c - 97) % 26) + 97)) isEnd++;
    } while (isEnd < index);

    return acc + String.fromCharCode(((cur + c - 97) % 26) + 97);
  }, "");
}
