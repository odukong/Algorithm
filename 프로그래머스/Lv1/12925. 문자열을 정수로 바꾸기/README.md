# [ Lv.1 ] 12925. 문자열을 정수로 바꾸기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12925?language=javascript)

### 성능

- 속도 : 0.05ms
- 용량 : 33.5MB

### 문제

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

### 입출력 예

예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

### 제한사항

- s의 길이는 1 이상 5이하입니다.
- s의 맨앞에는 부호(+, -)가 올 수 있습니다.
- s는 부호와 숫자로만 이루어져있습니다.
- s는 "0"으로 시작하지 않습니다.

---

### 풀이 설명

문자열의 첫번째 요소가 문자인지 아닌지(+,-)를 판단하기 위해 삼항연산자를 사용.

1. "-"인 경우, 숫자로 변환될 문자열의 사칙연산(-)으로 숫자가 출력될 수 있도록 함
2. "+" 이하동문
3. 그 외 그대로 숫자 형태로 변환될 수 있는 문자열은 parseFloat로 변환 수행
