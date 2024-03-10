# [ Lv.1 ] 12969. 직사각형 별찍기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12969)

### 성능

- 속도 : 46.25ms
- 용량 : 31.9MB

### 문제

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

### 제한사항

- n과 m은 각각 1000 이하인 자연수입니다.

### 입출력 예

- 입력

  - 5 3

- 출력

```
*****
*****
*****
```

---

### 풀이 설명

stdin으로 값을 입력받고, 입력받은 값인 data를 split("")으로 구분하여 n[0],n[1]를 저장한다.
이후 repeat 함수를 이용해 row에 출력되어야하는 \*을 반복하고 \n 줄바꿈 함수를 이용하여 b만큼 repeat하여 row를 출력한다.
