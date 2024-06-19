function solution(msg) {
  var answer = []; // 결과 반환값(인덱스)
  var book = {}; // 영어사전
  var eng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = 26; // 영어사전 마지막 인덱스
  for (let i = 0; i < 26; i++) {
    book[eng[i]] = i + 1;
  }

  // msg 단계별 순환
  while (msg.length > 0) {
    // msg.length==1
    if (msg.length == 1) {
      answer.push(book[msg]);
      break;
    }

    // msg.length>=2
    let str = msg[0];
    for (let i = 1; i < msg.length; i++) {
      str += msg[i];
      // str이 사전에 없다면, 그 전까지의 str(가장 긴 문장)을 answer에 push
      if (book[str] == undefined) {
        answer.push(book[str.slice(0, -1)]);
        book[str] = ++index; // 새로운 str을 사전에 추가
        break;
      }

      // 남아있는 msg 총 길이와 str의 길이가 같아질 경우, 종료.
      if (str.length == msg.length) {
        answer.push(book[str]);
        return answer;
      }
    }
    msg = msg.substring(str.length - 1); // 다음 단계에 사용할 msg 가공
  }

  return answer;
}
