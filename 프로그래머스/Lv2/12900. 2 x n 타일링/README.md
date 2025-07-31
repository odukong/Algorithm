# [ Lv.2 ] 12900. 2 x n 타일링

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12900)

### 풀이 날짜

- 2024.07.31

### 문제

가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

- 타일을 가로로 배치 하는 경우
- 타일을 세로로 배치 하는 경우
  예를들어서 n이 7인 직사각형은 다음과 같이 채울 수 있습니다.

![image](https://i.imgur.com/29ANX0f.png)

직사각형의 가로의 길이 n이 매개변수로 주어질 때, 이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

### 제한사항

- 가로의 길이 n은 60,000이하의 자연수 입니다.
- 경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.

### 입출력 예

| n   | result |
| --- | ------ |
| 4   | 5      |

### 입출력 예 설명

입출력 예 #1
다음과 같이 5가지 방법이 있다.

![image](https://i.imgur.com/keiKrD3.png)
![image](https://i.imgur.com/O9GdTE0.png)
![image](https://i.imgur.com/IZBmc6M.png)
![image](https://i.imgur.com/29LWVzK.png)
![image](https://i.imgur.com/z64JbNf.png)

### 풀이 설명

**dp 중 피보나치**를 이용한 점화식을 구하면 되는 문제입니다.
`n=4`인 예시를 들었을 때,

- 1번과 3번 그림에서의 가장 끝에 있는 열의 타일을 제거하면 `n=2`일 때의 경우의 수와 같습니다.
- 2,4,5번 그림에서는 가장 끝에 있는 열의 타일을 제거하면, `n=3`일 때 경우의 수와 같습니다.

즉, 가로 길이가 `n`일 때 타일을 놓을 수 있는 경우의 수는 `n-1`+`n-2` 각 경우의 수를 합한 값입니다.
