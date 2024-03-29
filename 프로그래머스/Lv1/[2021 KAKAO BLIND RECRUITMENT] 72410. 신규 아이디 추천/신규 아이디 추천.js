function solution(new_id) {
  // 1. (1..4단계) 문자열 치환 및 삭제
  var id = new_id
    .toLowerCase()
    .replace(/[^\w_.-]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "");

  // 2. (5..7단계) 만들어진 id 길이에 따른 아이디 변경
  if (id.length == 0) id += "a";
  if (id.length >= 16) id = id.slice(0, 15).replace(/\.$/g, "");
  if (id.length <= 2) {
    while (id.length < 3) {
      id += id.at(-1);
    }
  }
  return id;
}
