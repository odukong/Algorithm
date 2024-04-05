function solution(bandage, health, attacks) {
  var [t, sec, extra] = bandage;
  var result = health;

  for (let i = 0; i < attacks.length; i++) {
    let diff = attacks[i][0] - (i != 0 ? attacks[i - 1][0] : 0) - 1; // 가장 가까운 공격과 그 다음 공격 간 시간 차
    let cover = diff * sec + Math.floor(diff / t) * extra; // 가장 가까운 공격까지 회복가능량

    // 체력 회복
    if (result + cover >= health) result = health;
    else result += cover;

    // (현)가장 가까운 공격으로 인한 체력 감소
    result -= attacks[i][1];
    // 체력이 0 이하, 캐릭터의 죽음 break
    if (result <= 0) {
      result = -1;
      break;
    }
  }
  return result;
}
