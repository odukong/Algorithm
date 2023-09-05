# [ Lv.0 ] 181943. 문자열 겹쳐쓰기⭐

<img src="https://img.shields.io/badge/JavaScript-orange?style=flat&logo=javascript&logoColor=auto"/> [문제 바로가기](https://school.programmers.co.kr/learn/courses/30/lessons/181943)

### 성능
- 속도 : 0.22ms  
- 용량 : 33.4MB 

### 문제
문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

- 입출력

    |my_string	|overwrite_string|s|	result|
    |---------------|-------------|--|---------------|
    |"He11oWor1d"	|"lloWorl"|	2|"HelloWorld"|
    |"Program29b8UYP"|	"merS123"|	7	|"ProgrammerS123"|

    예제 1번의 my_string에서 인덱스 2부터 overwrite_string의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.

### 제한사항
my_string와 overwrite_string은 숫자와 알파벳으로 이루어져 있습니다.
1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000
0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이