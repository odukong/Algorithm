# [ Lv.1 ] 12935. 제일 작은 수 제거하기

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12935)

### 성능

- 속도 : 2.90ms
- 용량 : 43.8MB

### 문제

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

### 제한사항

- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

### 입출력 예

          | arr| return        |

| ------- | ------------- |
| [4,3,2,1] | [4,3,2] |
| [10] | [-1] |

---

### 풀이 설명

arr에서 Math.min으로 가장 작은 수를 찾는다. 배열의 길이가 1이 아니라면, 최솟값이 아닌 값만을 뽑은 배열을 반환한다.
