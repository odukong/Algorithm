function solution(keymap, targets) {
  var result = [];
  var clicks = [];
  // 각 keymap click 최소치
  keymap.forEach((key) => {
    let obj = {};
    for (var i = 0; i < key.length; i++) {
      var char = key[i];
      if (!obj.hasOwnProperty(char)) obj[char] = i + 1;
    }
    clicks.push(obj);
  });

  // 각 target click 횟수
  targets.forEach((target) => {
    let sum = 0;
    for (var i = 0; i < target.length; i++) {
      let min = Infinity;
      clicks.map((click) => {
        if (click[target[i]] !== undefined && click[target[i]] < min) {
          min = click[target[i]];
        }
      });
      if (min == Infinity) {
        sum = -1;
        break;
      }
      sum += min;
    }
    result.push(sum);
  });

  return result;
}
