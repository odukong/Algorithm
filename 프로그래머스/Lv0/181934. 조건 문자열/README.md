# [ Lv.0 ] 181934. 조건 문자열

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/181934)

### 성능
- 속도 : 0.03ms  
- 용량 : 33.5MB

### 문제
문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

- 두 수가 n과 m이라면

        ">", "=" : n >= m
        "<", "=" : n <= m
        ">", "!" : n > m
        "<", "!" : n < m
두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

- 입출력

    |ineq|eq|n|m|	result|
    |---|---|---|---|------|
    |"<"|"="|20|50|1|
    |">"|"!"|41|78|0|

### 제한사항
1 ≤ n, m ≤ 100