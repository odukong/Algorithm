// My solution
function solution(s) {
  var answer = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  Object.keys(answer).map((num, i) => (s = s.replaceAll(num, answer[num])));
  return +s;
}

// split, join의 활용 : ex. zero을 연결점으로 보고 zero로 연결된 값을 각각 분리하고, zero가 빈 공간에 join(i)로 묶어줌
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
