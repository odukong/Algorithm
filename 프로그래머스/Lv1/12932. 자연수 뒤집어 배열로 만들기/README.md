# [ Lv.1 ] 12932. 자연수 뒤집어 배열로 만들기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12932)

### 성능

- 속도 : 0.06ms
- 용량 : 33.4MB

### 문제

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

### 입출력 예

| n     | return      |
| ----- | ----------- |
| 12345 | [5,4,3,2,1] |

### 제한사항

- n은 10,000,000,000이하인 자연수입니다.

---

### 풀이 설명

우선 숫자의 각 자리수를 분리하기 위해서 스프레드 연산자[...]를 통해 N을 String으로 묵시적 형변환을 진행하였다.
현 배열요소의 타입은 문자이기에 parseInt로 형변환을 진행한 후, reverse 메서드를 통해 배열 순서를 재정렬하였다.
