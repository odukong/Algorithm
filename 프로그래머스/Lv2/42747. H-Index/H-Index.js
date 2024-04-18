function solution(citations) {
  const boundary = citations.length;

  citations.sort((a, b) => b - a);
  for (let i = 0; i < boundary; i++) {
    if (citations[i] < i + 1) return i;
  }
  return boundary;
}
