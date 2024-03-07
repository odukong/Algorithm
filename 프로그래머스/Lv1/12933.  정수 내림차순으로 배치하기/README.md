# [ Lv.1 ] 12933. 정수 내림차순으로 배치하기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12933)

### 성능

- 속도 : 0.04ms
- 용량 : 33.5MB

### 문제

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

### 입출력 예

| n      | return |
| ------ | ------ |
| 118372 | 873211 |

### 제한사항

- n은 1이상 8000000000 이하인 자연수입니다.

---

### 풀이 설명

배열 형식으로 변환된 값을 sort()로 정렬하였다. 이때 정렬된 값은 아스키 코드를 바탕으로 정렬되어 작은 값부터 정렬된 상태이므로 reverse하여 순서를 바꾼 후 주어진 return 문자열 형태로 형변환을 진행한다.
