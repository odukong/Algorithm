function solution(n, words) {
  var couple = new Set(words);

  // 1. 중복 단어로 인한 탈락
  if (couple.size != words.length) {
    let arr = {};
    for (let i = 0; i < words.length; i++) {
      if (arr[words[i]]) {
        return [(i % n) + 1, Math.floor(i / n) + 1];
      } else {
        arr[words[i]] = 1;
      }
    }
  }
  // 2-1. 잘못된 단어로 인한 탈락
  // 2-2. 탈락이 없는 경우
  else {
    for (let i = 0; i < words.length; i++) {
      if (i != 0 && words[i - 1].at(-1) != words[i][0])
        return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    return [0, 0];
  }
}
