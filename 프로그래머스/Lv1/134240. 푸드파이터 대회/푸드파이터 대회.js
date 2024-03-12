function solution(food) {
  var arr = "";
  for (let i = 1; i < food.length; i++) {
    if (food[i] !== 1) {
      arr += i.toString().repeat((food[i] - (food[i] % 2)) / 2);
    }
  }
  return arr + "0" + [...arr].reverse().join("");
}
