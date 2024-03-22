function solution(participant, completion) {
  var result = "";
  const runners = new Map();

  // 참여자(participant)와 그 수를 map객체에 저장
  for (const runner of participant) {
    if (!runners.get(runner)) {
      runners.set(runner, 1);
    } else {
      runners.set(runner, runners.get(runner) + 1);
    }
  }

  // 완주자(completion)를 runners에서 감소
  for (const comple of completion) {
    if (runners.get(comple)) {
      runners.set(comple, runners.get(comple) - 1);
    }
  }

  // 완주 못한 경우(runners에서 여전히 1이상 값을 가진 경우)를 찾아 result 반환
  for (const person of participant) {
    if (runners.get(person) >= 1) {
      result = person;
      break;
    }
  }
  return result;
}
