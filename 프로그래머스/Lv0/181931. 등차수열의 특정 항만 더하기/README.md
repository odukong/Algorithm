# [ Lv.0 ] 181931. 등차수열의 특정 항만 더하기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/181931)

### 성능
- 속도 : 0.05ms 
- 용량 : 33.5MB

### 문제
두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 (i + 1)항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.


### 입출력 예 

|a|d|included|	result|
|---|---|----|------|
|3|4|[true, false, false, true, true]|37|
|7 |1|[false, false, false, true, false, false, false]|10|


### 제한사항
1 ≤ a ≤ 100

1 ≤ d ≤ 100

1 ≤ included의 길이 ≤ 100

included에는 true가 적어도 하나 존재합니다.
