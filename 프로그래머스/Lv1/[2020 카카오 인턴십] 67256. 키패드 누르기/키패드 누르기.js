// 현재 왼손, 오른손이 누르고 있는 key와 next key사이의 거리 구하는 Function
function distance(key, next, keypad) {
  let nowIndex = keypad.get(key);
  let nextIndex = keypad.get(next);

  return (
    Math.abs(nowIndex[0] - nextIndex[0]) + Math.abs(nowIndex[1] - nextIndex[1])
  );
}

function solution(numbers, hand) {
  // 1. keypad 값 index 형태로 변경
  const keypad = new Map();
  for (let i = 1; i <= 9; i++) {
    keypad.set(i, [
      Math.floor((i - 1) / 3),
      i - (1 + Math.floor((i - 1) / 3) * 3),
    ]);
  }
  keypad.set("*", [3, 0]);
  keypad.set(0, [3, 1]);
  keypad.set("#", [3, 2]);

  var priority = hand == "right" ? "R" : "L"; // 우선 순위 손
  var hands = ["*", "#"]; // 현재 왼손, 오른손이 누르고 있는 key
  var result = "";

  // 2. number에 따라 keypad 누르기
  numbers.forEach((number) => {
    switch (number) {
      case 1:
      case 4:
      case 7:
        result += "L";
        hands[0] = number;
        break;
      case 3:
      case 6:
      case 9:
        result += "R";
        hands[1] = number;
        break;
      default:
        // 현재 key에서 다음 key까지 distance 구하기
        let left = distance(hands[0], number, keypad);
        let right = distance(hands[1], number, keypad);
        if (left > right) {
          result += "R";
          hands[1] = number;
        } else if (left < right) {
          result += "L";
          hands[0] = number;
        } else {
          result += priority;
          hands[priority == "L" ? 0 : 1] = number;
        }
    }
  });

  return result;
}
