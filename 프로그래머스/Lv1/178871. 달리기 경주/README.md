# [ Lv.1 ] 178871. 달리기 경주

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/178871)

### 풀이 날짜

- 2024.04.02

### 성능

- 최소
  - 속도 : 0.08ms
  - 용량 : 33.5MB
- 최대
  - 속도 : 238.38ms
  - 용량 : 86.8MB

### 문제 구분

- 연습문제

### 문제

얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.

### 제한사항

- 5 ≤ players의 길이 ≤ 50,000
  - players[i]는 i번째 선수의 이름을 의미합니다.
  - players의 원소들은 알파벳 소문자로만 이루어져 있습니다.
  - players에는 중복된 값이 들어가 있지 않습니다.
  - 3 ≤ players[i]의 길이 ≤ 10
- 2 ≤ callings의 길이 ≤ 1,000,000
  - callings는 players의 원소들로만 이루어져 있습니다.
  - 경주 진행중 1등인 선수의 이름은 불리지 않습니다.

### 입출력 예

| players                               | callings                       | result                                |
| ------------------------------------- | ------------------------------ | ------------------------------------- |
| ["mumu", "soe", "poe", "kai", "mine"] | ["kai", "kai", "mine", "mine"] | ["mumu", "kai", "mine", "soe", "poe"] |

### 입출력 예 설명

입출력 예 #1

4등인 "kai" 선수가 2번 추월하여 2등이 되고 앞서 3등, 2등인 "poe", "soe" 선수는 4등, 3등이 됩니다. 5등인 "mine" 선수가 2번 추월하여 4등, 3등인 "poe", "soe" 선수가 5등, 4등이 되고 경주가 끝납니다. 1등부터 배열에 담으면 ["mumu", "kai", "mine", "soe", "poe"]이 됩니다.

### 풀이 설명

1. **ranks 객체에 players의 이름을 key로 하여 선수들의 순위를 미리 저장**한다. 이는 이후 callings 배열에 존재하는 선수들의 index(순위)를 찾는 계산속도를 빠르게 하기 위함이다.
2. 이후 callings 배열에 저장된 역전하는 선수들에 대한 순위 조정 반복문을 실행한다.
   1. ranks 객체에서 해당 선수의 순위(index)를 가져온다.
   2. 또한 calling 선수에게 역전당할 앞 순서(index-1) 선수의 이름(temp)를 가져온다.
   3. index와 temp를 이용해 players에서 두 선수의 순위를 변경한다. - **swap 이용**
   4. 또한 players의 순서가 변경되었기에 이전 순위를 담고 있는 ranks 객체 값들 역시 순위가 변경된 값으로 변경해준다.
3. 최종적으로 callings에 의해 순위 조정된 players 배열을 반환한다.

### 오답 풀이 설명

✅ 객체와 유사하게 Map을 활용하여 미리 선수들의 순위를 저장해두었다. 하지만 선수들의 이름을 key로, 순위를 value로 설정하여 추후 두 선수들의 순서를 바꾸며 Map 객체의 값들도 변경하는 과정에서 시간 초과가 발생하였다.

```
function getKeyByValue(object, value) {
  for (let key of object.keys()) {
    if (object.get(key) == value) {
      return key;
    }
  }
}

callings.forEach((call) => {
    let index = ranks.get(call);
    ranks.set(getKeyByValue(ranks, index - 1), index);
    ranks.set(call, index - 1);
});

```

✅ 역전하는 선수의 이름은 이미 주어졌기에 Map 객체에서 이를 key로 하여 쉽게 찾을 수 있지만, 역전당하는 선수의 이름은 따로 주어지지 않기 때문에 역전하는 선수의 순위인(index)에서 -1한 값인 index-1이라는 value를 통해 역전당하는 선수의 이름(key)을 찾아야 한다.

✅ 하지만 value 값을 이용해 key를 구하는 과정에서 ranks 객체의 모든 key,value를 순서대로 탐색해야하기 때문에 players의 수가 적을 때는 상관이 없지만, players 수가 많아진다면 탐색시간이 늘어날 수 밖에 없다.
