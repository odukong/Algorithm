function solution(id_list, report, k) {
  var result = new Array(id_list.length).fill(0);
  var extra = []; // 정상신고된 id
  // 유저 간 신고 현황을 알 수 있는 2차원 배열 생성
  var arr = new Array(id_list.length).fill(0);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(arr.length).fill(0);
  }
  const users = new Object();
  id_list.forEach((id, idx) => (users[id] = idx));

  // 신고자 -> 신고당한 멤버 : 2차원 배열에 표시(1)
  report.forEach((declare) => {
    let reporter, reportee;
    [reporter, reportee] = declare.split(" ");
    if (arr[users[reporter]][users[reportee]] == 0) {
      arr[users[reporter]][users[reportee]] = 1;
    }
  });

  // k이상 신고된 멤버 확인(정지)
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j][i];
      if (sum >= k) {
        extra.push(id_list[i]);
        break;
      }
    }
  }

  // 정지된 멤버를 신고한 멤버에게 메일 전송
  for (let row = 0; row < arr.length; row++) {
    extra.forEach((v) => {
      if (arr[row][users[v]] == 1) {
        result[row] += 1;
      }
    });
  }

  return result;
}
