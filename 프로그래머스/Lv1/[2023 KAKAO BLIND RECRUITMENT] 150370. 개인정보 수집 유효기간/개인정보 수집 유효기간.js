function solution(today, terms, privacies) {
  const todays = new Date(today); // 현재 날짜 yy.mm.dd
  const term = new Map(); //  약관종류, 유효기간
  terms.forEach((v) => {
    let arr = v.split(" ");
    term.set(arr[0], Number(arr[1]));
  });
  var result = [];

  privacies.forEach((privacy, idx) => {
    let arr = privacy.split(" ");
    let day = new Date(arr[0]);

    // privacy에 유효기간 더함.
    // 만약, 유효기간을 더한 값이 today보다 작거나 같다면 유효기간이 지남을 의미.
    day.setMonth(day.getMonth() + term.get(arr[1]));
    if (day <= todays) result.push(idx + 1);
  });
  return result;
}
