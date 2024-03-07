# [ Lv.1 ] 12944. 평균 구하기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12944)

### 성능

- 속도 : 0.05ms
- 용량 : 33.5MB

### 문제

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

### 입출력 예

| n         | result |
| --------- | ------ |
| [1,2,3,4] | 2.5    |
| [5,5]     | 5      |

### 제한사항

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

---

### 풀이 설명

reduce 함수를 사용하여 배열요소의 누적 합산 값을 구한 후, 요소 개수(arr.length)만큼 나누어 평균을 구하였다.
