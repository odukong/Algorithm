# [ Lv.1 ] 12934. 정수 제곱근 판별

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12934)

### 성능

- 속도 : 0.03ms
- 용량 : 33.5MB

### 문제

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

### 입출력 예

| n   | return |
| --- | ------ |
| 121 | 144    |
| 3   | -1     |

### 입출력 설명

입출력 예#1
121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

입출력 예#2
3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

### 제한사항

- n은 1이상, 50000000000000 이하인 양의 정수입니다.

---

### 풀이 설명

Math.sqrt에 n값을 넣어 계산된 값이 isInteger로 정수인지 판단하였다. 만약 삼항연산자를 통해 해당 계산값이 정수라면 n은 어떤 양의 정수의 제곱이므로 양의 정수+1의 제곱을 반환하도록 하였다.
