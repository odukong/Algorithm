# [ Lv.1 ] 12931. 자릿수 더하기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12931)

### 성능

- 속도 : 0.04ms
- 용량 : 33.5MB

### 문제

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

### 입출력 예

| N   | answer |
| --- | ------ |
| 123 | 6      |
| 987 | 24     |

### 입출력 설명

입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

### 제한사항

- N의 범위 : 100,000,000 이하의 자연수

---

### 풀이 설명

우선 숫자의 각 자리수를 분리하기 위해서 스프레드 연산자[...]를 통해 N을 String으로 묵시적 형변환을 진행하였다.
이후 reduce 메서드를 통해 각 자리수(문자)앞에 +(사칙연산자)를 더해 숫자로써 형변환이 되어 최종적인 acc 누적값을 반환하도록 하였다.
