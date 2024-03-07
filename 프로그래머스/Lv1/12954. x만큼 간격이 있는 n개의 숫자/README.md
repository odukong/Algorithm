# [ Lv.1 ] 12954. x만큼 간격이 있는 n개의 숫자

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12954)

### 성능

- 속도 : 0.07ms
- 용량 : 33.4MB

### 문제

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

### 입출력 예

| x   | n   | answer       |
| --- | --- | ------------ |
| 2   | 5   | [2,4,6,8,10] |
| 4   | 3   | [4,8,12]     |
| -4  | 2   | [-4,-8]      |

### 제한사항

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

---

### 풀이 설명

크기가 n이며 x로 초기화 된 arr이라는 배열을 추가로 생성하여, arr에 대하여 forEach문을 돌려 구하고자하는 값인 `num * (index + 1)`을 반환되는 answer 배열에 추가하였다.
