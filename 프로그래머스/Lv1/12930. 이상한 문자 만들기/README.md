# [ Lv.1 ] 12930. 이상한 문자 만들기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12930)

### 성능

### ⭐ 정확성

- 속도 : 0.08ms
- 용량 : 33.4MB

### 문제

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

### 제한사항

- 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
- 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

### 입출력 예

| s                 | result            |
| ----------------- | ----------------- |
| "try hello world" | "TrY HeLlO WoRlD" |

### 입출력 예 설명

"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

---

### 풀이 설명

split 메서드로 우선 단어별로 구분을 지었다. 또한 단어 내 알파벳에 대해서도 짝수 인덱스는 대문자로, 홀수 인덱스는 소문자로 바꾸는 작업을 수행하기 때문에 이 경우에도 split 메서드로 알파벳들을 분리한다.

변환작업을 마쳤다면, join 메서드로 알파벳을 연결한 후에 다시 각 단어를 join(" ")으로 연결시켜 반환한다.
