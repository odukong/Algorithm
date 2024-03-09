# [ Lv.1 ] 12918. 문자열 다루기 기본

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12918)

### 성능

- 속도 : 0.08ms
- 용량 : 33.6MB

### 문제

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

### 제한사항

- s는 길이 1 이상, 길이 8 이하인 문자열입니다.
- s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

### 입출력 예

| s      | return |
| ------ | ------ |
| "a234" | false  |
| "1234" | true   |

---

### 풀이 설명

우선 s의 길이가 4 또는 6인지를 체크하였으며,이에 부합하면 s가 숫자만을 포함하는 문자열인지를 체크한다.
every 메서드는 하나라도 값이 조건에 부합하지 않으면 false를 반환하는 메서드이기에 값이 정수인지를 Number.isInteger를 통해 확인하는 과정을 거쳤다.

- 이때 s는 문자 타입이기에 + 사칙연산자를 넣어 s가 정수라면 묵시적으로 정수타입의 형 변환이 이루어지게 했다.
