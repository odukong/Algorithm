# [ Lv.1 ] 42576. 완주하지 못한 선수

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/42576)

### 풀이 날짜

- 2024.03.22

### 성능

⭐ 정확성(58.3)

- 최소
  - 속도 : 0.07ms
  - 용량 : 33.5MB
- 최대
  - 속도 : 0.80ms
  - 용량 : 33.8MB

⭐ 효율성(41.7)

- 최소
  - 속도 : 40.85ms
  - 용량 : 66.4MB
- 최대
  - 속도 : 57.62ms
  - 용량 : 66.8MB

### 문제 구분

- 해시

### 문제

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

### 제한사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

### 입출력 예

| participant                                       | completion                               | return   |
| ------------------------------------------------- | ---------------------------------------- | -------- |
| ["leo", "kiki", "eden"]                           | ["eden", "kiki"]                         | "leo"    |
| ["marina", "josipa", "nikola", "vinko", "filipa"] | ["josipa", "filipa", "marina", "nikola"] | "vinko"  |
| ["mislav", "stanko", "mislav", "ana"]             | ["stanko", "ana", "mislav"]              | "mislav" |

### 입출력 예 설명

예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

### 풀이 설명

1. 한 Map 객체를 생성하여 참여자(participant) 이름과 이름 가진 참여자 수를 저장한다.
2. 완주자인 경우는, runners map객체에서 해당 요소의 값을 -1하여 완주하였음을 나타낸다. 최종적으로 0이 되면 해당 이름의 사람은 완주했음을 의미하는 것이다.
3. 완주 못한 경우를 찾기 위해 runners map객체 요소의 값이 1이상인 값을 찾고 break하여 완주하지 못한 사람의 이름을 반환한다.
