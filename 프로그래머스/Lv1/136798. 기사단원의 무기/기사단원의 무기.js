function solution(number, limit, power) {
  var knight = [];
  for (let i = 1; i <= number; i++) {
    let index = 1;
    let factors = [];
    while (index <= Math.sqrt(i)) {
      if (i % index === 0) {
        factors.push(index);
        factors.push(i / index);
      }
      index++;
    }
    let factor = new Set(factors);
    factor.size > limit ? knight.push(power) : knight.push(factor.size);
  }
  return knight.reduce((acc, cur) => acc + cur);
}
