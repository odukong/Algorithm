# [ Lv.1 ] 68644. 두 개 뽑아서 더하기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/68644)

### 풀이 날짜

- 2024.03.13

### 성능

### ⭐ 정확성

- 속도 : 0.06ms
- 용량 : 33.3MB

### 문제

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

### 제한사항

- numbers의 길이는 2 이상 100 이하입니다.
- numbers의 모든 수는 0 이상 100 이하입니다.

### 입출력 예

| numbers     | result        |
| ----------- | ------------- |
| [2,1,3,4,1] | [2,3,4,5,6,7] |
| [5,0,2,7]   | [2,5,7,9,12]  |

### 입출력 예 설명

입출력 예 #1

- 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
- 3 = 2 + 1 입니다.
- 4 = 1 + 3 입니다.
- 5 = 1 + 4 = 2 + 3 입니다.
- 6 = 2 + 4 입니다.
- 7 = 3 + 4 입니다.
- 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.

입출력 예 #2

- 2 = 0 + 2 입니다.
- 5 = 5 + 0 입니다.
- 7 = 0 + 7 = 5 + 2 입니다.
- 9 = 2 + 7 입니다.
- 12 = 5 + 7 입니다.

따라서 [2,5,7,9,12] 를 return 해야 합니다.

---

### 풀이 설명

- numbers의 1번째 요소를 골라놓은 상태에서 2~n 번째 요소 중 하나를 택하여 더하는 연산을 진행한다.
- 이후, 1번째 요소와의 조합은 모두 계산된 상태이기에 2번째 요소는 1번째 요소를 제외한 나머지들과 더하는 연산을 한다. 이하 동일
- arr에 push된 값을 먼저 오름차순 순으로 정렬한 후, arr에는 중복된 값들이 존재하기 때문에 Set 객체를 이용해 중복 값을 제거하여 return 한다.
