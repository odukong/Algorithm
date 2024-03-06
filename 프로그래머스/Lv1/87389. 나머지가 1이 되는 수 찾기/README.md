# [ Lv.1 ] 87389. 나머지가 1이 되는 수 찾기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/87389)

### 성능

- 속도 : 0.05ms
- 용량 : 33.5MB

### 문제

자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

### 입출력 예

| n   | result |
| --- | ------ |
| 10  | 3      |
| 12  | 11     |

### 제한사항

- 3 ≤ n ≤ 1,000,000

---

### 풀이 설명

n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x는 n-1의 가장 작은 약수와 같다.
(단, n-1이 소수라면 해당 값이 x가 된다.)
그렇기에 n-1의 최소 약수 x를 찾아 반환한다.
