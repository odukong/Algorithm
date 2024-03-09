# [ Lv.1 ] 12917. 문자열 내림차순으로 배치하기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12917)

### 성능

- 속도 : 0.08ms
- 용량 : 33.6MB

### 문제

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

### 제한사항

- str은 길이 1 이상인 문자열입니다.

### 입출력 예

| s         | return    |
| --------- | --------- |
| "Zbcdefg" | "gfedcbZ" |

---

### 풀이 설명

아스키코드 상, 숫자-대문자-소문자 순으로 코드가 크다. sort는 이 아스키 코드 크기대로 오름차순 정렬을 하기 때문에 sort 메소드만 사용한다면 대문자 + 소문자 작은 수(a)에서 큰 수(z) 순으로 정렬될 것이다. 결과값으로 원하는 것은 이를 역으로 정렬한 값이기에 reverse 함수를 이용해 문자를 다시 정렬한다.
