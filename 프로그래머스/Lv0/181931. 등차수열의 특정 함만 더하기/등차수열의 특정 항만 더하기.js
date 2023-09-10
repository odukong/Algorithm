function solution(a, d, included) {
    let answer=0;
    for(i=0;i<included.length;i+=1){
        if(included[i]){
            answer+=a+d*i;
        }
    }
    return answer;
}


// v2 - reduce() 메서드로 코드 간소화
// function solution(a, d, included) {
//     return included.reduce((acc, flag, i) => {
//         return flag ? acc + a + d * i : acc
//     }, 0)
// }