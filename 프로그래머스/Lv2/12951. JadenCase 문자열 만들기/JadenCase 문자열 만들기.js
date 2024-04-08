function solution(s) {
  var Jaden = s.split(" ").map((word) => {
    // 공백 연속의 경우 고려
    return word[0] != undefined
      ? word[0].toUpperCase() + word.slice(1).toLowerCase()
      : "";
  });
  return Jaden.join(" ");
}
