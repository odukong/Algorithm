# [ Lv.1 ] 12912. 두 정수 사이의 합

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12912)

### 성능

- 속도 : 0.03ms
- 용량 : 33.5MB

### 문제

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

### 입출력 예

| a   | b   | return |
| --- | --- | ------ |
| 3   | 5   | 12     |
| 3   | 3   | 3      |
| 5   | 3   | 12     |

### 제한사항

- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

---

### 풀이 설명

해당 문제는 등차수열의 합 공식을 이용하여 풀 수 있다. a ~ b 범위의 공차가 1인 등차수열이라 생각한다면, 등차수열 합 공식은 `n(a+l)/2`(n=항의 개수,a=첫째 항,l=마지막 항)이기 때문에 해당 식을 구현하면 return 값을 구할 수 있다.
