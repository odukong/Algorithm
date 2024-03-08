# [ Lv.1 ] 86051. 없는 숫자 더하기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/86051)

### 성능

- 속도 : 0.03ms
- 용량 : 33.6MB

### 문제

0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ numbers의 길이 ≤ 9
  - 0 ≤ numbers의 모든 원소 ≤ 9
  - numbers의 모든 원소는 서로 다릅니다.

### 입출력 예

| numbers           | result |
| ----------------- | ------ |
| [1,2,3,4,6,7,8,0] | 14     |
| [5,8,4,0,6,7,9]   | 6      |

### 입출력 예 설명

입출력 예 #1

5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
입출력 예 #2

1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

---

### 풀이 설명

0~9까지의 정수의 합은 45이다. 문제에서는 numbers 배열에 포함되지 않은 값들의 합을 반환하라하였지만, 역으로 생각하면 0~9까지의 합에서 numbers 배열요소의 값들을 뺀 값과 같다.

그래서 reduce 함수에서 acc 초기값을 45로 설정하여 numbers 요소의 값을 차례로 뺄셈해주었다.

❗만약, 0~9 가 아니라 범위가 더 큰 값이라 하면 45라고 직접 계산한 값이 아닌 등차수열의 합 공식을 이용해 그 합을 구할 수 있다.
