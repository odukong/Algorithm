# [ Lv.2 ] 87390. n^2 배열 자르기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/87390)

### 풀이 날짜

- 2024.04.22

### 성능

- 최소
  - 속도 : 0.23ms
  - 용량 : 33.5MB
- 최대
  - 속도 : 209.03ms
  - 용량 : 66MB

### 문제 구분

- 월간 코드 챌린지 시즌3

### 문제

정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

1. n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
2. i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
   - 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
3. 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
4. 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.

정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ n ≤ 10^7
- 0 ≤ left ≤ right < n^2
- right - left < 10^5

### 입출력 예

| n   | left | right | result            |
| --- | ---- | ----- | ----------------- |
| 3   | 2    | 5     | [3,2,2,3]         |
| 4   | 7    | 14    | [4,3,3,3,4,4,4,4] |

### 입출력 예 설명

입출력 예 #1

- 다음 애니메이션은 주어진 과정대로 1차원 배열을 만드는 과정을 나타낸 것입니다.

![image](https://grepp-programmers.s3.amazonaws.com/production/file_resource/103/FlattenedFills_ex1.gif)

입출력 예 #2

- 다음 애니메이션은 주어진 과정대로 1차원 배열을 만드는 과정을 나타낸 것입니다.

![image](https://grepp-programmers.s3.amazonaws.com/production/file_resource/104/FlattenedFills_ex2.gif)

### 풀이 설명

✅ 주어진 n의 값 범위가 크기 때문에, 자료형 값을 넘어가 값이 이상해지는 오류가 발생할 수 있다. 이를 위해 해당 문제는 전체 배열 을 생성하여 구하는 방식이 아닌 한 규칙을 발견하여 문제를 해결하였다.

✅ (1,1) (이때, 1열과 1행은 보통 배열의 0열, 0행을 의미)과 (2,2), (2,3) 에 들어가는 값들을 살펴보면 1, 2, 3이다. 즉, 두 값 중 큰 값이 해당 칸 안에 값으로써 할당되는 것이다. 이를 위해 makeNum이라는 함수를 별도로 만들어 들어갈 값을 유추하여 배열을 생성하였다.
