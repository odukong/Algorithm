function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((spell, j) => (j % 2 ? spell.toLowerCase() : spell.toUpperCase()))
        .join("")
    )
    .join(" ");
}
