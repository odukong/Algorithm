function solution(babbling) {
  var count = 0;
  var arr = [];
  var example = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];
    let index = 0;
    let flag = 1;
    while (word.length > index) {
      if (example.includes(word.substr(index, 3))) {
        if (word.substr(index, 3) != arr.at(-1)) {
          arr.pop();
          arr.push(word.substr(index, 3));
          index += 3;
        } else {
          index = word.length;
          flag = 0;
        }
      } else if (example.includes(word.substr(index, 2))) {
        if (word.substr(index, 2) != arr.at(-1)) {
          arr.pop();
          arr.push(word.substr(index, 2));
          index += 2;
        } else {
          index = word.length;
          flag = 0;
        }
      } else {
        index = word.length;
        flag = 0;
      }
    }
    arr.pop();
    flag && count++;
  }
  return count;
}
