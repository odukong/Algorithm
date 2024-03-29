# [ Lv.1 ] 70128. 내적

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/70128)

### 성능

- 속도 : 0.08ms
- 용량 : 33.6MB

### 문제

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]\*b[n-1] 입니다. (n은 a, b의 길이)

### 제한사항

- a, b의 길이는 1 이상 1,000 이하입니다.
- a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

### 입출력 예

| a         | b           | result |
| --------- | ----------- | ------ |
| [1,2,3,4] | [-3,-1,0,2] | 3      |
| [-1,0,1]  | [1,0,-1]    | -2     |

### 입출력 예 설명

입출력 예 #1

- a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.

입출력 예 #2

- a와 b의 내적은 (-1)*1 + 0*0 + 1\*(-1) = -2 입니다.

---

### 풀이 설명

내적은 행렬 곱을 통해 구할 수 있다. reduce 메서드를 통해 a,b의 같은 인덱스끼리의 곱을 구한 후 acc 누적값을 최종적으로 반환하도록 했다.
