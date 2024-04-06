function solution(friends, gifts) {
  var max = 0;
  const friend = new Object();
  friends.forEach((v, idx) => (friend[v] = idx));

  var gift_indices = new Array(friends.length); // 선물지수
  var record = new Array(friends.length).fill(0); // 선물 현황
  record.forEach((_, idx, arr) => {
    gift_indices[idx] = new Array(2).fill(0);
    arr[idx] = new Array(friends.length).fill(0);
  });

  // 저번 달 주고받은 선물 현황 및 선물 지수 계산
  gifts.forEach((gift) => {
    let [give, receive] = gift.split(" ");
    record[friend[give]][friend[receive]] += 1;
    gift_indices[friend[give]][0] += 1;
    gift_indices[friend[receive]][1] += 1;
  });

  // 다음 달 받을 선물 개수
  record.forEach((person, idx) => {
    let gift = 0;
    for (let i = 0; i < person.length; i++) {
      if (idx == i) continue;
      // 1. 선물 받은 기록이 없거나 같을 경우(선물 지수)
      if (person[i] == record[i][idx]) {
        let a = gift_indices[idx][0] - gift_indices[idx][1];
        let b = gift_indices[i][0] - gift_indices[i][1];
        if (a > b) gift += 1;
      } // 2. 선물 받은 기록이 있을 경우.
      else {
        if (person[i] > record[i][idx]) gift += 1;
      }
    }
    if (gift > max) max = gift;
  });

  return max;
}
