# [ Lv.1 ] 12937. 짝수와 홀수

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12937)

### 성능

- 속도 : 0.04ms
- 용량 : 33.5MB

### 문제

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

### 입출력 예

| num | return |
| --- | ------ |
| 3   | "Odd"  |
| 4   | "Even" |

### 제한사항

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

---

### 풀이 설명

정수 num이 나눠졌을때 나머지가 0이면 짝수임을 이용한 삼항연산자 계산식.
