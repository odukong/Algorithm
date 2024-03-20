function solution(lottos, win_nums) {
  var rank = [6, 6, 5, 4, 3, 2, 1];
  var result = [0, 0];
  var count = 0;
  lottos
    .filter((v) => v != 0)
    .map((lotto) => {
      if (win_nums.includes(lotto)) count++;
    });
  result[0] = rank[count + lottos.filter((v) => v == 0).length];
  result[1] = rank[count];

  return result;
}
