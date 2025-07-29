function solution(fees, records) {
  const [BASIC, BASIC_FEE, PER, PER_FEE] = [...fees];
  const result = [];
  const cars = {};

  for (let record of records) {
    const [time, car_number] = record.split(" ");
    const number = Number(car_number);
    const [hour, minute] = time.split(":").map(Number);
    const timetoMin = hour * 60 + minute;

    if (!cars[number]) {
      cars[number] = [timetoMin];
    } else {
      cars[number].push(timetoMin);
    }
  }

  for (let car in cars) {
    let total_min = 0;
    while (cars[car].length > 0) {
      let IN = cars[car].shift(); // (입차)
      let OUT; // (출차)
      if (cars[car].length == 0) {
        OUT = 23 * 60 + 59;
      } else {
        OUT = cars[car].shift();
      }
      total_min += OUT - IN;
    }

    if (total_min <= BASIC) {
      result.push(BASIC_FEE);
    } else {
      let fee = BASIC_FEE;
      fee += Math.ceil((total_min - BASIC) / PER) * PER_FEE;
      result.push(fee);
    }
  }

  return result;
}
