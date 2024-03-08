# [ Lv.1 ] 12948. 핸드폰 번호 가리기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12948)

### 성능

- 속도 : 0.05ms
- 용량 : 33.6MB

### 문제

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 \*으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한사항

- phone_number는 길이 4 이상, 20이하인 문자열입니다.

### 입출력 예

| phone_number  | return               |
| ------------- | -------------------- |
| "01033334444" | "\*\*\*\*\*\*\*4444" |
| "027778888"   | "\*\*\*\*\*8888"     |

---

### 풀이 설명

map 함수 내에서 전화번호 뒷자리 4자리를 제외하곤 *로 변환되도록 배열 요소의 인덱스가 arr[-3]전까지를 기준으로 하여 이 보다 작은 인덱스라면 숫자를 *로 변환하였다.
