function solution(wallpaper) {
  var result = [wallpaper.length, wallpaper[0].length, 0, 0];
  for (let i = 0; i < wallpaper.length; i++) {
    let min = [...wallpaper[i]].indexOf("#");
    let max = [...wallpaper[i]].lastIndexOf("#");
    // '#'(파일)가 row에 존재할 경우 실행
    if (min != -1 && max != -1) {
      // 1. lux & rdx: x축 값
      result[0] > i && (result[0] = i);
      result[2] < i + 1 && (result[2] = i + 1);

      // 2. luy & rdy : y축 값
      result[1] > min && (result[1] = min);
      result[3] < max + 1 && (result[3] = max + 1);
    }
  }
  return result;
}
