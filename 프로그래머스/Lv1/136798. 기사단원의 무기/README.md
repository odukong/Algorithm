# [ Lv.1 ] 136798. 기사단원의 무기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/136798)

### 풀이 날짜

- 2024.03.18

### 성능

- 최소
  - 속도 : 0.06ms
  - 용량 : 33.3MB
- 최대
  - 속도 : 169.24ms
  - 용량 : 46.6MB

### 문제 구분

- 연습문제

### 문제

숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다. 기사들은 무기점에서 무기를 구매하려고 합니다.

각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.

예를 들어, 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매합니다. 만약, 이웃나라와의 협약으로 정해진 공격력의 제한수치가 3이고 제한수치를 초과한 기사가 사용할 무기의 공격력이 2라면, 15번으로 지정된 기사단원은 무기점에서 공격력이 2인 무기를 구매합니다. 무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다. 그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.

기사단원의 수를 나타내는 정수 number와 이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때, 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.

### 제한사항

- 1 ≤ number ≤ 100,000
- 2 ≤ limit ≤ 100
- 1 ≤ power ≤ limit

### 입출력 예

| number | limit | power | result |
| ------ | ----- | ----- | ------ |
| 5      | 3     | 2     | 10     |
| 10     | 3     | 2     | 21     |

### 입출력 예 설명

입출력 예 #1

1부터 5까지의 약수의 개수는 순서대로 [1, 2, 2, 3, 2]개입니다. 모두 공격력 제한 수치인 3을 넘지 않기 때문에 필요한 철의 무게는 해당 수들의 합인 10이 됩니다. 따라서 10을 return 합니다.

입출력 예 #2

1부터 10까지의 약수의 개수는 순서대로 [1, 2, 2, 3, 2, 4, 2, 4, 3, 4]개입니다. 공격력의 제한수치가 3이기 때문에, 6, 8, 10번 기사는 공격력이 2인 무기를 구매합니다. 따라서 해당 수들의 합인 21을 return 합니다.

---

### 풀이 설명

- 각 단원(number)의 약수의 개수를 구하는 것이 중점인 문제이다. number가 100,000에 가까워지면 계산되는 값이 커지기 때문에 약수를 구하는데에 있어 적은 계산이 이루어지도록 하는 것이 중요하다고 생각했다.
  - 구하는 약수의 범위를 1 ~ number가 아니라 `1 ~ number 제곱근 범위`로 줄여 해당 범위에서의 number의 약수를 먼저 구한다.
  - 또한 찾은 index라는 약수로 number를 나누었을 때의 값 역시 number의 약수가 될 수 있기에 이를 고려해준다. 단, 해당 값은 index값과 중복이 될 수 있다. 중복은 추후 Set 객체를 통해 제거한다.
- 모든 단원의 약수의 개수 즉, 무기 공격력을 구했다면 해당 공격력이 제한수치를 넘지 않는지 확인한 후, 만약 넘는다면 power를 knight 배열에 넣어주고 넘지 않는다면 구한 약수의 개수(factor.size)를 넣어준다.
- 결과적으로 knight배열에는 각 단원의 무기의 공격력이 담겨져 있다. 무기 공격력과 필요한 철의 무게 비율이 1:1로 같으므로, knight의 합산 값을 반환한다.
