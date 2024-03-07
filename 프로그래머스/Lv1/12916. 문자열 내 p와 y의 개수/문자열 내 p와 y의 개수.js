function solution(s) {
  var obj = { p: 0, y: 0 };
  [...s.toLowerCase()].map((s) => {
    s === "p" && (obj.p += 1);
    s === "y" && (obj.y += 1);
  });

  return obj.p === obj.y;
}
