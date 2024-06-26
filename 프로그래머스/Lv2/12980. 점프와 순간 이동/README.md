# [ Lv.2 ] 12980. 점프와 순간 이동

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12980)

### 풀이 날짜

- 2024.04.13

### 성능

⭐ 정확성

- 최소
  - 속도 : 0.03ms
  - 용량 : 33.4MB
- 최대
  - 속도 : 0.15ms
  - 용량 : 33.5MB

⭐ 효율성

- 최소
  - 속도 : 0.09ms
  - 용량 : 33.4MB
- 최대
  - 속도 : 0.15ms
  - 용량 : 33.4MB

### 문제 구분

- Summer/Winter Coding(~2018)

### 문제

OO 연구소는 한 번에 K 칸을 앞으로 점프하거나, (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동을 할 수 있는 특수한 기능을 가진 아이언 슈트를 개발하여 판매하고 있습니다. 이 아이언 슈트는 건전지로 작동되는데, 순간이동을 하면 건전지 사용량이 줄지 않지만, 앞으로 K 칸을 점프하면 K 만큼의 건전지 사용량이 듭니다. 그러므로 아이언 슈트를 착용하고 이동할 때는 순간 이동을 하는 것이 더 효율적입니다. 아이언 슈트 구매자는 아이언 슈트를 착용하고 거리가 N 만큼 떨어져 있는 장소로 가려고 합니다. 단, 건전지 사용량을 줄이기 위해 점프로 이동하는 것은 최소로 하려고 합니다. 아이언 슈트 구매자가 이동하려는 거리 N이 주어졌을 때, 사용해야 하는 건전지 사용량의 최솟값을 return하는 solution 함수를 만들어 주세요.

예를 들어 거리가 5만큼 떨어져 있는 장소로 가려고 합니다.
아이언 슈트를 입고 거리가 5만큼 떨어져 있는 장소로 갈 수 있는 경우의 수는 여러 가지입니다.

- 처음 위치 0 에서 5 칸을 앞으로 점프하면 바로 도착하지만, 건전지 사용량이 5 만큼 듭니다.
- 처음 위치 0 에서 2 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 2) x 2에 해당하는 위치로 이동할 수 있으므로 위치 4로 이동합니다. 이때 1 칸을 앞으로 점프하면 도착하므로 건전지 사용량이 3 만큼 듭니다.
- 처음 위치 0 에서 1 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 1) x 2에 해당하는 위치로 이동할 수 있으므로 위치 2로 이동됩니다. 이때 다시 순간이동 하면 (현재까지 온 거리 : 2) x 2 만큼 이동할 수 있으므로 위치 4로 이동합니다. 이때 1 칸을 앞으로 점프하면 도착하므로 건전지 사용량이 2 만큼 듭니다.

위의 3가지 경우 거리가 5만큼 떨어져 있는 장소로 가기 위해서 3번째 경우가 건전지 사용량이 가장 적으므로 답은 2가 됩니다.

### 제한사항

- 숫자 N: 1 이상 10억 이하의 자연수
- 숫자 K: 1 이상의 자연수

### 입출력 예

| N    | result |
| ---- | ------ |
| 5    | 2      |
| 6    | 2      |
| 5000 | 5      |

### 풀이 설명

✅ start 지점에서 n으로 가는 순방향(+)이 아닌, n지점에서 0(start)으로 가는 역방향(-)이라는 포인트를 두어 문제에 접근하였다. n이 **홀수**라면 한 칸을 점프했다는 의미에서 n--를, 건전지는 +1 사용되었다는 의미에서 total+1을 한다. n이 **짝수**라면 순간이동(x2)을 했다는 의미에서 n / 2을, 건전지는 사용되지 않았기에 total을 그대로 전달한다. <u>해당 과정을 n이 0이 될 때(n만큼 떨어진 장소에 도착)까지 반복한다.</u>
