# [ Lv.1 ] 12916. 문자열 내 p와 y의 개수

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12916)

### 성능

- 속도 : 0.06ms
- 용량 : 33.4MB

### 문제

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

### 입출력 예

| s         | answer |
| --------- | ------ |
| "pPoooyY" | true   |
| "Pyy"     | false  |

### 입출력 설명

입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다

### 제한사항

- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.

---

### 풀이 설명

문자열에 포함된 p와 y 개수 값을 저장하기 위한 obj를 선언하였다. 소문자로 변환된 s를 map 메서드로 돌려 p 혹은 y와 일치 여부를 판단하여 obj의 p, y값을 증가시켜 문자열 내 p, y 개수가 일치하는지 체크하여 true, false를 반환하였다.
