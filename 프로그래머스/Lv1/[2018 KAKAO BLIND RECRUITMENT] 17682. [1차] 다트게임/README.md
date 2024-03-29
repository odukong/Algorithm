# [ Lv.1 ] 17682. 다트게임

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/17682)

### 풀이 날짜

- 2024.03.19

### 성능

- 최소
  - 속도 : 0.19ms
  - 용량 : 33.5MB
- 최대
  - 속도 : 0.40ms
  - 용량 : 33.5MB

### 문제

#### 다트 게임

카카오톡에 뜬 네 번째 별! 심심할 땐? 카카오톡 게임별~
![image](http://t1.kakaocdn.net/welcome2018/gamestar.png)

카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

1. 다트 게임은 총 3번의 기회로 구성된다.
2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
4. 옵션으로 스타상(_) , 아차상(#)이 존재하며 스타상(_) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
5. 스타상(_)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(_)의 점수만 2배가 된다. (예제 4번 참고)
6. 스타상(_)의 효과는 다른 스타상(_)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(\*) 점수는 4배가 된다. (예제 4번 참고)
7. 스타상(\*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
9. 스타상(\*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

0~10의 정수와 문자 S, D, T, \*, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

### 입력형식

"점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
예) 1S2D\*3T

- 점수는 0에서 10 사이의 정수이다.
- 보너스는 S, D, T 중 하나이다.
- 옵선은 \*이나 # 중 하나이며, 없을 수도 있다.

### 출력형식

3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다.
예) 37

### 입출력 예

| 예제 | dartResult | answer | 설명                            |
| ---- | ---------- | ------ | ------------------------------- |
| 1    | 1S2D\*3T   | 37     | 1^1 _ 2 + 2^2 _ 2 + 3^3         |
| 2    | 1D2S#10S   | 9      | 1^2 + 2^1 \* (-1) + 10^1        |
| 3    | 1D2S0T     | 3      | 1^2 + 2^1 + 0^3                 |
| 4    | 1S*2T*3S   | 23     | 1^1 _ 2 _ 2 + 2^3 \* 2 + 3^1    |
| 5    | 1D#2S\*3S  | 5      | 1^2 _ (-1) _ 2 + 2^1 \* 2 + 3^1 |
| 6    | 1T2D3D#    | -4     | 1^3 + 2^2 + 3^2 \* (-1)         |
| 7    | 1D2S3T\*   | 59     | 1^2 + 2^1 _ 2 + 3^3 _ 2         |

---

### 풀이 설명

1. 정규식을 이용해 dartResult를 점수와 보너스(,옵션)으로 분리하였다. ⭐숫자와 문자를 분리
2. S,D,T 보너스에 따라 점수의 제곱값이 달라지기 때문에 switch문을 이용해 초기 점수를 셋팅해주었다.
3. 그 후 옵션으로 제공되었던 \*,# 이 bonus 문자열에 포함되어있는지 확인한다.
   1. 만약 포함되어있다면 \*는 이전 점수와 현재 점수에 x2를 해주고, #는 현재 점수에 -1을 곱해준다.
4. 최종적으로 구한 점수를 합산하여 return 한다.
