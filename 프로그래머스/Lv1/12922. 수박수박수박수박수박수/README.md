# [ Lv.1 ] 12922. 수박수박수박수박수박수?

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12922)

### 성능

- 속도 : 0.03ms
- 용량 : 33.5MB

### 문제

길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

### 제한사항

- n은 길이 10,000이하인 자연수입니다.

### 입출력 예

| n   | return     |
| --- | ---------- |
| 3   | "수박수"   |
| 4   | "수박수박" |

---

### 풀이 설명

n이 짝수이거나 홀수이냐를 기준으로 "수","박"이 출력되는 값을 다르게 처리하였다.
