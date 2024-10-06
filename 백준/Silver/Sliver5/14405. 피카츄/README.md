# [ Silver V ] 14405. 피카츄

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://www.acmicpc.net/problem/14405)

### 분류

- 문자열

### 문제

피카츄는 "pi", "ka", "chu"를 발음할 수 있다. 따라서, 피카츄는 이 세 음절을 합친 단어만 발음할 수 있다. 예를 들면, "pikapi"와 "pikachu"가 있다.

문자열 S가 주어졌을 때, 피카츄가 발음할 수 있는 문자열인지 아닌지 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 문자열 S가 주어진다. 문자열은 알파벳 소문자로 이루어진 문자열이며, 길이는 5000을 넘지 않는다.

### 출력

문자열 S가 "pi", "ka", "chu"를 이어 붙여서 만들 수 있으면 "YES"를 아니면 "NO"를 출력한다.

### ✨풀이방법

- 문자열을 input[i]와 input[i + 1] 또는 input[i + 2]로 체크하여 "pi", "ka", "chu"인지 확인.
- i는 각 음절을 확인한 후 음절만큼 인덱스를 증가시켜 문자열의 문자를 순차적으로 체크한다.
  - p의 경우, 바로 뒤의 문자가 i가 오는지
  - k의 경우, 바로 뒤의 문자가 a가 오는지
  - c의 경우, 바로 뒤 두 음절이 hu 인지
  - 그 외의 경우는 result를 false로 변경하여 문자열 순회를 종료한다.
