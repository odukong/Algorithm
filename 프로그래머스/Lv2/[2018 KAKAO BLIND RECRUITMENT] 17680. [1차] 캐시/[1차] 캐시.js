function solution(cacheSize, cities) {
  var time = 0;
  var queue = [];
  var cities_e = cities.map((v) => v.toUpperCase());
  for (let city of cities_e) {
    let isCity = queue.indexOf(city);
    if (cacheSize == 0) {
      time += cities.length * 5;
      break;
    }
    if (isCity == -1) {
      if (queue.length == cacheSize) queue.shift();
      queue.push(city);
      time += 5;
    } else {
      queue.splice(isCity, 1);
      queue = queue.concat([city]);
      time += 1;
    }
  }
  return time;
}
