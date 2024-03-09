function solution(n) {
  return n % 2 === 0
    ? "수박".repeat(n / 2)
    : "수" + "박수".repeat(Math.floor(n / 2));
}
