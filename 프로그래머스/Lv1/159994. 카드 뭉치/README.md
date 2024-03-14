# [ Lv.1 ] 159994. 카드 뭉치

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/159994)

### 풀이 날짜

- 2024.03.14

### 성능

- 최소
  - 속도 : 0.04ms
  - 용량 : 33.5MB
- 최대
  - 속도 : 0.15ms
  - 용량 : 33.5MB

### 문제

코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.

- 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
- 한 번 사용한 카드는 다시 사용할 수 없습니다.
- 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
- 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.

예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.

문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

### 제한사항

- 1 ≤ cards1의 길이, cards2의 길이 ≤ 10
  - 1 ≤ cards1[i]의 길이, cards2[i]의 길이 ≤ 10
  - cards1과 cards2에는 서로 다른 단어만 존재합니다.
- 2 ≤ goal의 길이 ≤ cards1의 길이 + cards2의 길이
  - 1 ≤ goal[i]의 길이 ≤ 10
  - goal의 원소는 cards1과 cards2의 원소들로만 이루어져 있습니다.
- cards1, cards2, goal의 문자열들은 모두 알파벳 소문자로만 이루어져 있습니다.

### 입출력 예

| cards1                  | cards2         | goal                                  | result |
| ----------------------- | -------------- | ------------------------------------- | ------ |
| ["i", "drink", "water"] | ["want", "to"] | ["i", "want", "to", "drink", "water"] | "Yes"  |
| ["i", "water", "drink"] | ["want", "to"] | ["i", "want", "to", "drink", "water"] | "No"   |

### 입출력 예 설명

입출력 예 #1

본문과 같습니다.

입출력 예 #2

cards1에서 "i"를 사용하고 cards2에서 "want"와 "to"를 사용하여 "i want to"까지는 만들 수 있지만 "water"가 "drink"보다 먼저 사용되어야 하기 때문에 해당 문장을 완성시킬 수 없습니다. 따라서 "No"를 반환합니다.

---

### 풀이 설명

- cards 내부 카드 순서를 바꿀 수 없고, 각각의 cards에서 순서를 번갈아 가면서 한 번 이상은 꼭 사용되어야한다는 것이 쟁점 포인트이다.
- 우선 goal 문장을 모두 완성시키는 것이 일차적인 목표이므로, goal 배열을 모두 돌 수 있도록 while문을 설정한다.
- **switch문**을 통해, goal의 value값이 cards1, cards2의 맨 앞 원소에 존재하는지 확인했다. **어느 카드 더미에서 value값이 존재한다면, 카드 더미에서 해당 카드는 사용한 것으로 간주하여 shift시켜 카드 더미에서 제거한다.** 그 후 index 값을 의미하는 count를 증가시켜 goal의 다음 단어를 완성시킬 수 있는지 여부를 반복하여 확인한다.
- 반복문 도중, switch case 조건을 하나도 만족하지 못할 경우(ex. goal 문장을 완성시키기 위한 cards 내부 단어 순서가 맞지 않아), 이는 해당 문장을 완성시킬 수 없다고 보기 때문에 "Yes"로 선언되어 있던 answer 값을 "No"로 바꾸고 while문을 빠져나온다.
- goal 문장이 완성되었다고 판단되면, 반복문을 빠져나와 "Yes"로 선언되어 있던 answer 값을 그대로 return 한다.
