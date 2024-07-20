function solution(topping) {
  var answer = 0;
  var element = new Map();
  topping.forEach((v) => {
    if (element.has(v)) {
      let count = element.get(v);
      element.set(v, count + 1);
    } else {
      element.set(v, 1);
    }
  });

  let [me, brother] = [0, element.size];
  let type = new Set();
  for (let i = 0; i < topping.length; i++) {
    let count = element.get(topping[i]); // 토핑 개수
    if (count >= 1) {
      count--;
      if (count == 0) brother--;
      element.set(topping[i], count);
    }

    if (!type.has(topping[i])) {
      type.add(topping[i]);
      me++;
    }
    if (me == brother) answer++;
  }

  return answer;
}
