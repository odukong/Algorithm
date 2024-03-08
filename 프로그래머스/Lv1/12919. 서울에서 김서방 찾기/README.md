# [ Lv.1 ] 12919. 서울에서 김서방 찾기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12919)

### 성능

- 속도 : 0.04ms
- 용량 : 33.5MB

### 문제

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

### 제한사항

- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
- "Kim"은 반드시 seoul 안에 포함되어 있습니다.

### 입출력 예

| seoul           | return              |
| --------------- | ------------------- |
| ["Jane", "Kim"] | "김서방은 1에 있다" |

---

### 풀이 설명

seoul 배열에서 Kim 이라는 값을 가지는 요소는 1개가 무조건 존재하므로 findIndex를 이용해 seoul 배열요소와 Kim이 일치하는 값이 있다면 해당 요소의 index를 반환하도록 하였다.
