function solution(record) {
  const result = [];
  const name_list = {};

  // 1. name_list 객체에 유저의 최종 닉네임을 저장.
  record.forEach((user) => {
    const [command, id, name] = user.split(" ");
    if (command !== "Leave") {
      name_list[id] = name;
    }
  });

  // 2. 각 command에 대응하는 문장을 result 배열에 push
  record.forEach((user) => {
    const [command, id] = user.split(" ");
    if (command == "Enter") {
      result.push(`${name_list[id]}님이 들어왔습니다.`);
    } else if (command == "Leave") {
      result.push(`${name_list[id]}님이 나갔습니다.`);
    }
  });

  return result;
}
