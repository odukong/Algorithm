function solution(a,b){
    var str1=a.join(b).toInt();
    var str2=b.join(a).toInt();

    let answer=(str1>str2)? str1:str2;
    return answer;
}

// v2. Math.max(a,b) 메서드로 값 비교 가능