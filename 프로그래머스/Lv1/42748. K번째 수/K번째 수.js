function solution(array, commands) {
  var arr = [];
  for (let i = 0; i < commands.length; i++) {
    let element = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b)[commands[i][2] - 1];
    arr.push(element);
  }
  return arr;
}

// 구조분해할당 + map, filter를 활용한 풀이
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command; // 구조분해
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
