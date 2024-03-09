function solution(s) {
  return s.length % 2 !== 0
    ? s[(s.length - 1) / 2]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

// 번외 : string 의 가져올 범위를 substr로 지정
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
