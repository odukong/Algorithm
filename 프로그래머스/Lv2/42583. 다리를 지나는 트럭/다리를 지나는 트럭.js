function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0); // 다리 (큐)
  const total_trucks = truck_weights.length; // 전체 트럭의 수
  let crossed_trucks = 0; // 다리를 건넌 트럭의 수
  let current_weight = 0; // 다리에 올라가있는 트럭의 무게
  let time = 0; // 시간 (초)

  while (crossed_trucks < total_trucks) {
    time++;

    // 다리(bridge)의 맨 앞에 있는 요소를 빼냅니다.
    const out_bridge = bridge.shift();
    if (out_bridge !== 0) crossed_trucks++;
    current_weight -= out_bridge;

    // 새로운 트럭을 다리에 진입시킵니다.
    // 1. 트럭이 올라갈 수 없는 경우 : 0 추가 => 다리 위 다른 트럭이 앞으로 전진함을 의미하기 위한 숫자.
    // 2. 트럭이 올라갈 수 있는 경우 : truck_weights[0] 추가
    if (!truck_weights[0] || weight < current_weight + truck_weights[0]) {
      bridge.push(0);
    } else {
      const truck = truck_weights.shift();
      bridge.push(truck);
      current_weight += truck;
    }
  }

  return time;
}
