function solution(name, yearning, photo) {
  var answer = [];
  photo.map((p, _) => {
    let count = 0;
    p.map((v, _) => name.includes(v) && (count += yearning[name.indexOf(v)]));
    answer.push(count);
  });
  return answer;
}
