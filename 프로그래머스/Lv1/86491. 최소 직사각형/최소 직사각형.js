function solution(sizes) {
  let w = 0;
  let h = 0;
  for (let i = 0; i < sizes.length; i++) {
    let temp = 0;
    if (sizes[i][0] < sizes[i][1])
      (temp = sizes[i][1]), (sizes[i][1] = sizes[i][0]), (sizes[i][0] = temp); // sort로 정렬 가능
    w = Math.max(sizes[i][0], w);
    h = Math.max(sizes[i][1], h);
  }
  return h * w;
}
