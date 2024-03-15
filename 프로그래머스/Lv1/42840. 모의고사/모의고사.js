function solution(answers) {
  var correct = [];
  var result = [];
  var person = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };
  Object.keys(person).forEach((v) => {
    let count = 0;
    answers.forEach(
      (answer, i) => answer == person[v][i % person[v].length] && count++
    );
    correct.push(count);
  });
  correct.forEach((v, i) => Math.max(...correct) == v && result.push(i + 1));
  return result;
}
