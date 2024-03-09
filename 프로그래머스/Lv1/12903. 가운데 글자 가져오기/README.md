# [ Lv.1 ] 12903. 가운데 글자 가져오기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12903)

### 성능

- 속도 : 0.03ms
- 용량 : 33.4MB

### 문제

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

### 제한사항

- s는 길이가 1 이상, 100이하인 스트링입니다.

### 입출력 예

| s       | return |
| ------- | ------ |
| "abcde" | "c"    |
| "qwer"  | "we"   |

---

### 풀이 설명

string의 길이가 짝수이거나 홀수이냐를 기준으로 length를 이용하여 가운데 글자를 반환하도록 하였다.
