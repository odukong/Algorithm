function solution(phone_number) {
  return [...phone_number]
    .map((n, i, arr) => (arr.length - i > 4 ? (n = "*") : n))
    .join("");
}

// 번외) 정규식을 활용한 풀이 : 뒤의 4자리를 남겨놓고 그 앞의 문자는 모두 *로 교체
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
