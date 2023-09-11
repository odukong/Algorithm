# [ Lv.0 ] 181922. 수열과 구간 쿼리 4

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/181922)

### 성능
- 속도 : 7.85ms
- 용량 : 36.9MB

### 문제
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.

위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

⭐ <b style="background:yellow">arr[i]의 값이 배수가 되는 것이 아닌 i가 k의 배수인 것에 유의!</b>

### 입출력 예 

|arr|queries|result|
|---|---|---|
|[0, 1, 2, 4, 3]|[[0, 4, 1],[0, 3, 2],[0, 3, 3]]|[3, 2, 4, 6, 4]|




### 제한사항
- 1 ≤ arr의 길이 ≤ 1,000

    0 ≤ arr의 원소 ≤ 1,000,000

- 1 ≤ queries의 길이 ≤ 1,000

    0 ≤ s ≤ e < arr의 길이
    0 ≤ k ≤ 5