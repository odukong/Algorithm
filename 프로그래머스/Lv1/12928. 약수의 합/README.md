# [ Lv.1 ] 12928. 약수의 합

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12928)

### 성능

- 속도 : 0.03ms
- 용량 : 33.4MB

### 문제

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

### 입출력 예

| n   | result |
| --- | ------ |
| 12  | 28     |
| 5   | 6      |

### 제한사항

- n은 0 이상 3000이하인 정수입니다.

---

### 풀이 설명

n의 약수는 n/2보다 클 수 없기 때문에 while문에서 n/2보다 같거나 작을 경우까지만 수행되도록 설정하였으며, index++값으로 n을 나누었을 때 그 나머지가 0이 된다면 해당 index는 n의 약수임을 뜻하기 때문에 answer에 더해 최종적으로 answer과 자기 자신(n)을 더해 값을 반환한다.
