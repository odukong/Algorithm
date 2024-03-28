function solution(survey, choices) {
  // 1. 각 유형 별 점수표 생성
  const personal = ["R", "T", "C", "F", "J", "M", "A", "N"];
  const scores = new Map();
  personal.forEach((p) => scores.set(p, 0));

  // 2. 성격 유형 설문조사 점수 계산
  survey.forEach((element, i) => {
    if (choices[i] != 4) {
      let choice = element[choices[i] < 4 ? 0 : 1];
      scores.set(choice, scores.get(choice) + Math.abs(choices[i] - 4));
    }
  });

  // 3. n번 지표끼리의 비교 -> 최종 성격 유형 도출
  let result = "";
  for (let i = 0; i < 8; i += 2) {
    let a = scores.get(personal[i]);
    let b = scores.get(personal[i + 1]);
    if (a != b) result += a > b ? personal[i] : personal[i + 1];
    else
      result += personal[i] < personal[i + 1] ? personal[i] : personal[i + 1];
  }

  return result;
}
