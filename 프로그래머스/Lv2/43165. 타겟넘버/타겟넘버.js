function solution(numbers, target) {
  var result = 0;

  //  DFS : ---..--, ---..-+ 부터 +++...++, +++..+-까지 순환
  const dfs = (num, level) => {
    if (level == numbers.length) {
      if (target == num) result++;
      return;
    }

    var start = [-num, num];

    if (level == 1) {
      for (let i = 0; i < 2; i++) {
        dfs(start[i] - numbers[level], level + 1);
        dfs(start[i] + numbers[level], level + 1);
      }
    } else {
      dfs(num - numbers[level], level + 1);
      dfs(num + numbers[level], level + 1);
    }
  };

  dfs(numbers[0], 1);

  return result;
}
