# [ Lv.1 ] 12950. 행렬의 덧셈

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/12950)

### 성능

- 속도 : 0.12ms
- 용량 : 33.5MB

### 문제

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

### 제한사항

- 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

### 입출력 예

| arr1          | arr2          | return        |
| ------------- | ------------- | ------------- |
| [[1,2],[2,3]] | [[3,4],[5,6]] | [[4,6],[7,9]] |
| [[1],[2]]     | [[3],[4]]     | [[4],[6]]     |

---

### 풀이 설명

arr1,2 의 형태가 이차원 배열 형태이기에 이중 for문을 활용하여 계산하였으며, 같은 위치(i,j가 같은 값인)에 있는 arr1,2 각각의 요소끼리 합한 값을 arr배열에 push하여 return 값을 구하였다.
