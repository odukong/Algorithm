function solution(n){
    let num;
    let result=0;
    if(n%2!==0){
        num=1;
        while(num<=n){
            result+=num;
            num+=2;
        }
    }else{
        num=2;
        while(num<=n){
            result+=Math.pow(num,2);
            num+=2;
        }
    }
    return result;
}

// v2. 수열의 합 공식을 이용한 풀이